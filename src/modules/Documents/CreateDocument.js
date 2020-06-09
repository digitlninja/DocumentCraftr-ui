import React, {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBBtn, MDBAnimation,
} from 'mdbreact';
import Breadcrumbs from '../../components/Breadcrumbs';
import AddDocumentResources from '../Resources/AddDocumentResources';
import ResourcePanel from '../Resources/ResourcePanel';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {addDocument, updateDocument} from '../../redux/documents/document-actions';
import ToastNotification from '../../components/ToastNotification';
import {operationTypes} from '../../constants';
import DocumentEditorFooter from './DocumentEditorFooter';

const initialState = {
    title: '',
    body: '',
    resources: [],
    createdAt: '',
    updatedAt: ''
};

const CreateDocument = () => {
    const [showResourceForm, setShowResourceForm] = useState(false);
    const [updateSuccessful, setUpdateSuccessful] = useState(false);
    const [addSuccessful, setAddSuccessful] = useState(false);
    const [state, setState] = useState(initialState);

    const {pathname} = useLocation();
    useHistory();
    const dispatch = useDispatch();

    const {loading, error} = useSelector(state => ({
            document: state.documentData.documents,
            loading: state.documentData.loading,
            error: state.documentData.error === 'Network Error'
        }
    ), shallowEqual);

    useEffect(() => {
        return () => {
            // Prompt user before they refresh and lose form data by mistake
            window.onbeforeunload = (event) => {
                const message = 'Are you sure?';
                event.returnValue = message;
                return message;
            };
        };
    }, []);

    const handleDeleteResource = async (resourceId) => {
        try {
            const newResources = state.resources.filter((resource) => resource._id !== resourceId);
            setState({...state, resources: newResources});
        } catch (_) {
        }
    };
    const handleAddDocument = async (event) => {
        event.preventDefault();
        try {
            const newDocument = await dispatch(addDocument(state));
            setAddSuccessful(true);
            setState({...state, ...newDocument});
        } catch (_) {
        }
    };
    const handleChange = (event) => {
        event.target.className += ' was-validated';
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(updateDocument(state));
            setUpdateSuccessful(true);
        } catch (_) {
        }
    };
    const isFormValid = 'state.title && state.body';
    return (
        <MDBContainer fluid>
            {addSuccessful && (<ToastNotification typeOfOperation={operationTypes.add}/>)}
            {updateSuccessful && (<ToastNotification typeOfOperation={operationTypes.update}/>)}
            {error && (<ToastNotification failed/>)}
            <Breadcrumbs route={pathname}/>
            <MDBRow>
                <MDBCol md='10' className='pr-1'>
                    <MDBCard>
                        <MDBCardBody className='mx-4 my-4'>
                            <form
                                className='needs-validation was-validated'
                                onSubmit={(event) => handleSubmit(event)}
                                noValidate
                            >
                                <MDBRow>
                                    <MDBCol md='8'>
                                        <h3 className='mb-5'>
                                            <strong>Document Creation</strong>
                                            {updateSuccessful && (
                                                <Link
                                                    className='blue-text small ml-3'
                                                    to={`/documents/view/${state._id}`}
                                                    style={{fontSize: '1rem'}}
                                                >
                                                    view
                                                </Link>
                                            )}
                                        </h3>
                                        <h5 className='mb-2'>
                                            {!addSuccessful && (
                                                <>
                                                    <MDBIcon icon='pen-fancy mr-3'/>
                                                    First, add a title... (then write your document)
                                                </>
                                            )}
                                        </h5>
                                    </MDBCol>
                                    <MDBCol md='2'>
                                        <MDBAnimation
                                            type={loading || !addSuccessful ? 'flash' : ''} {...(loading && {infinite: true})}
                                            count={2}>
                                            {!addSuccessful ? (
                                                <MDBBtn
                                                    className='z-depth-1'
                                                    color={!isFormValid ? 'danger' : 'warning'}
                                                    outline
                                                    rounded
                                                    block
                                                    type='submit'
                                                    onClick={(event) => handleAddDocument(event)}
                                                    disabled={!state.title || loading}
                                                >
                                                    Add
                                                </MDBBtn>
                                            ) : (
                                                <MDBBtn
                                                    className='z-depth-1'
                                                    color={!isFormValid ? 'danger' : 'success'}
                                                    outline
                                                    rounded
                                                    block
                                                    type='submit' disabled={!isFormValid || loading}
                                                    onClick={(event) => handleSubmit(event)}
                                                >
                                                    {!updateSuccessful ? 'Create' : loading ? 'Saving' : 'Update'}
                                                </MDBBtn>
                                            )}
                                        </MDBAnimation>
                                    </MDBCol>

                                    {addSuccessful && (
                                        <MDBCol md='2.5'>
                                            <MDBBtn className='z-depth-1' color='warning' outline rounded block
                                                    onClick={() => setShowResourceForm(!showResourceForm)}>
                                                Add Resources
                                            </MDBBtn>
                                        </MDBCol>
                                    )}
                                </MDBRow>
                                <MDBInput
                                    label='Document Title'
                                    type='text'
                                    containerClass='pl-1'
                                    required
                                    id='title'
                                    name='title'
                                    value={state.title}
                                    onChange={(event) => handleChange(event)}/>
                                {addSuccessful && (
                                    <MDBInput
                                        type='textarea'
                                        containerClass='pl-1'
                                        required
                                        id='body'
                                        name='body'
                                        value={state.body}
                                        label='Document Body'
                                        rows='12'
                                        onChange={(event) => handleChange(event)}
                                    />
                                )}
                            </form>
                            {showResourceForm && (
                                <AddDocumentResources
                                    onUpdateSuccess={setUpdateSuccessful}
                                    documentId={state._id}
                                    onUpdateState={setState}
                                />
                            )}
                        </MDBCardBody>
                        <DocumentEditorFooter/>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='2' className='pl-1'>
                    {state.resources && state.resources.length > 0 && state.resources.map((resource) => (
                            <ResourcePanel key={resource._id} resource={resource} onDeleteResource={handleDeleteResource}/>
                        )
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default CreateDocument;
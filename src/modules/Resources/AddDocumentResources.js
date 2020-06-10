import React, {useState} from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBSwitch,
    MDBBtn, MDBBadge,
} from 'mdbreact';
import FileUpload from '../../components/Dropzone';
import {useDispatch} from 'react-redux';
import {addResource} from '../../redux/documents/document-resource-actions';
import {resourceTypes} from '../../constants';
import {isValidUrl} from '../../helpers';

const AddDocumentResources = ({documentId, onUpdateSuccess, onUpdateState}) => {
    const [switchOn, setSwitchOn] = useState(false);
    const [state, setState] = useState({
        title: '',
        body: '',
        content: '',
        type: resourceTypes.url,
        file: '',
    });
    const dispatch = useDispatch();

    const handleSwitchChange = () => {
        setSwitchOn(!switchOn);
        setState({
            ...state,
            type: switchOn ? resourceTypes.url : resourceTypes.file,
            body: switchOn ? undefined : '',
            file: !switchOn && undefined
        });
    };

    const handleChange = (event) => {
        // If its a file, set it
        if (event.length) {
            const file = event[0];
            setState({...state, body: undefined, file});
            return;
        }
        event.target.className += ' was-validated';
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    // Create a Form data object with state to send for upload
    const _getStateWithFormData = () => {
        const formData = new FormData();
        formData.append('file', state.file);
        formData.append('title', state.title);
        formData.append('body', state.body);
        formData.append('type', state.type);
        return formData;
    };

    // Add the resource to the document and update UI
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (state.file) {
                const formDataWithState = _getStateWithFormData();
                const updatedDoc = await dispatch(addResource(documentId, formDataWithState, {isFile: true}));
                onUpdateState({...updatedDoc});
                return onUpdateSuccess(true);
            }
            const updatedDoc = await dispatch(addResource(documentId, state));
            onUpdateState({...updatedDoc});
            onUpdateSuccess(true);
        } catch (_) {
        }
    };

    const isFormValid = (state.title && isValidUrl(state.body)) || (state.title && !state.body && state.file);

    return (
        <>
            <MDBRow>
                <MDBCol md='12' className='pr-0'>
                    <h5 className='p-2 white-text keenious-purple mt-0 mb-4 rounded'>
                        Add Resources
                    </h5>
                </MDBCol>
            </MDBRow>
            <form
                className='needs-validation was-validated'
                onSubmit={(event) => handleSubmit(event)}
                noValidate
            >
                <MDBRow className='mb-4'>
                    <MDBCol md='10'>
                        <MDBInput
                            value={state.title}
                            name='title'
                            label='Title'
                            labelClass='align-top'
                            type='text'
                            validate
                            required
                            containerClass='mt-0 p-0'
                            className='mt-0'
                            onChange={(event) => handleChange(event)}
                        />
                    </MDBCol>
                    <MDBCol md='2'>
                        <MDBBtn className='z-depth-1' color={!isFormValid ? 'danger' : 'success'} outline rounded block
                                type='submit' disabled={!isFormValid}>
                            Add
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol md='5' className='mb-4'>
                        <h5>
                            What type of resource is it?
                        </h5>
                    </MDBCol>
                    <MDBCol md='2' className='mb-2'>
                        <MDBSwitch labelLeft='Link'
                                   labelRight='File'
                                   checked={switchOn}
                                   value={state.title}
                                   onChange={() => handleSwitchChange()}/>
                    </MDBCol>
                    <MDBCol md='5' className='mb-2'>
                        {state.file && switchOn && (
                            <MDBBadge color='keenious-skin' className='p-2 float-right'>
                                {state.file.name}
                            </MDBBadge>
                        )}
                    </MDBCol>

                    {!switchOn && (
                        <MDBCol md='4'>
                            <MDBInput
                                value={state.body}
                                name='body'
                                label='Link - must include http://...'
                                labelClass='align-top'
                                type='text'
                                validate
                                required
                                containerClass='m-0 p-0'
                                className='m-0'
                                onChange={(event) => handleChange(event)}
                            />
                        </MDBCol>
                    )}
                </MDBRow>
                {switchOn && (
                    <MDBRow>
                        <FileUpload onDrop={handleChange}/>
                    </MDBRow>
                )}
                <MDBRow>
                    <MDBCol md='10'>
                        <MDBInput
                            value={state.notes}
                            name='notes'
                            label='notes'
                            labelClass='align-top'
                            type='text'
                            validate
                            required
                            containerClass='mt-0 p-0'
                            className='mt-3'
                            onChange={(event) => handleChange(event)}
                        />
                    </MDBCol>
                </MDBRow>
            </form>
        </>
    );
};

export default AddDocumentResources;
import React from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';

const FileUpload = ({onDrop}) => {
    const dropzone = useDropzone({
        accept: 'image/png',
        minSize: 0,
        maxSize: 2048,
    });

    return (
        <div className='dropzone'>
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps, isDragActive}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                    </div>
                )}
            </Dropzone>
        </div>

    );
};

export default FileUpload;
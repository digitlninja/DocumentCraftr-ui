import React from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = ({onDrop}) => {
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
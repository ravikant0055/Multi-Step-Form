import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

const Testing = () => {
//   const [store, setStore] = useState([]);
  
  const onDrop = useCallback((files)=>{
    console.log(files);
  },[]);

  
  const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop});
  return (
    <div>
        <div {...getRootProps()}>
           <input {...getInputProps()}/>
        </div>
        
        {
            isDragActive ?
            <p>dropping</p>
            :
            <p>Drop here</p>
        }
    </div>
  )
}

export default Testing;
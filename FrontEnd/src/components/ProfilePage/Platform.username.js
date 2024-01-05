import React, { useState } from "react";


const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div>
      <h2>Image Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Select Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Upload</button>
      </form>
      {selectedImage && (
        <div>
          <h3>Selected Image Preview:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Preview"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
    </div>
  );
};

const LEETCODE_USERNAME = () => {
    const [show,setEdit] = useState(false);
    const [text,setText] = useState('Edit');
    const [leetcode_username, setLeetcodeUsername] = useState('');
      const handleNameChange = (e) => {
          setLeetcodeUsername(e.target.value);
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted with name:', leetcode_username);
      };
    return (
      <>  
            <div className='bg-gray-500 p-4 rounded-xl gap-y-10 flex flex-col'>
                {
                    show == false ? 
  
                    <div className='text-white text-xl'>
                      <label>lc_username:</label> <span>{leetcode_username}</span>
                    </div>
                    :
  
                    <div>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <div className="flex flex-row gap-x-6">
                          <label htmlFor="name">lc_username:</label>
                          <input
                            type="text"
                            id="name"
                            value={leetcode_username}
                            onChange={handleNameChange}
                            required
                          />
                        </div>
                        <div className="text-center  rounded-xl">
                          <input
                            type="submit"
                            value="save"
                            className="bg-teal-500"
                            onClick={() => setEdit(false)}>
                          </input>
                        </div>
                      </form>
                      <button onClick={() => { setEdit(false); setText('Edit') }}>Cancel</button>
                    </div>
                }
                <button onClick={()=>{setEdit(true);setText('')}}>{text}</button>
            </div>
      </>
    )
 } 

const CODEFORCES_USERNAME = () => {
const [show,setEdit] = useState(false);
  const [text,setText] = useState('Edit');
  const [codeFrocesUsername, setCodeFrocesUsername] = useState('');
    const handleNameChange = (e) => {
        setCodeFrocesUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with name:', codeFrocesUsername);
    };
  return (
    <>
     
          <div className='bg-gray-500 p-4 rounded-xl gap-y-10 flex flex-col'>
              {
                  show == false ? 

                  <div className='text-white text-xl'>
                    <label>cf_username:</label> <span>{codeFrocesUsername}</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">cf_username</label>
                        <input
                          type="text"
                          id="name"
                          value={codeFrocesUsername}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                        <div className="text-center  rounded-xl">
                          <input 
                              type="submit" 
                              value="save" 
                              className="bg-teal-500"
                              onClick={()=>setEdit(false)}></input>
                        </div>
                    </form>
                    <button onClick={() => { setEdit(false); setText('Edit') }}>Cancel</button>
                  </div>
              }
              <button onClick={()=>{setEdit(true);setText('')}}>{text}</button>
          </div>
       
    </>
  )
}

const CODECHEF_USERNAME = () => {
    const [show,setEdit] = useState(false);
  const [text,setText] = useState('Edit');
  const [codechefUsername, setCodechefUsername] = useState('');
    const handleNameChange = (e) => {
        setCodechefUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with name:', codechefUsername);
    };
  return (
    <>
    
          <div className='bg-gray-500 p-4 rounded-xl gap-y-10 flex flex-col'>
              {
                  show == false ? 

                  <div className='text-white text-xl'>
                    <label>cc_username:</label> <span>{codechefUsername}</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">cc_username:</label>
                        <input
                          type="text"
                          id="name"
                          value={codechefUsername}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                         <div className="text-center  rounded-xl">
                         <input 
                              type="submit" 
                              value="save" 
                              className="bg-teal-500" 
                              onClick={()=>setEdit(false)}>
                          </input>
                        </div>
                    </form>
                    <button onClick={() => { setEdit(false); setText('Edit') }}>Cancel</button>
                  </div>
              }
              <button onClick={()=>{setEdit(true);setText('')}}>{text}</button>
          </div>

    </>
  )
}


const GITHUB_USERNAME = () => {
    const [show,setEdit] = useState(false);
  const [text,setText] = useState('Edit');
  const [githubUsername, setGithubUsername] = useState('');
  const handleNameChange = (e) => {
      setGithubUsername(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted with name:', githubUsername);
  };
  return (
    <>
       
          <div className='bg-gray-500 p-4 rounded-xl gap-y-10 flex flex-col'>
              {
                  show == false ? 

                  <div className='text-white text-xl'>
                    <label>github:</label> <span>{githubUsername}</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">git_username:</label>
                        <input
                          type="text"
                          id="name"
                          value={githubUsername}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                         <div className="text-center  rounded-xl">
                          <input 
                              type="submit" 
                              value="save" 
                              className="bg-teal-500" 
                              onClick={()=>setEdit(false)}>
                          </input>
                        </div>
                    </form>
                    <button onClick={() => { setEdit(false); setText('Edit') }}>Cancel</button>
                  </div>
              }
              <button onClick={()=>{setEdit(true);setText('')}}>{text}</button>
          </div>
    
    </>
  )
}

export {
    GITHUB_USERNAME,  CODECHEF_USERNAME,CODEFORCES_USERNAME , LEETCODE_USERNAME , ImageUpload
}
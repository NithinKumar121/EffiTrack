import React, { useState , useEffect } from "react";
import { getCookie } from "../../services/servicehelp";
import axios from "axios";
import { useSelector } from "react-redux";

const tokenName = process.env.REACT_APP_JWT_NAME;


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>{
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) =>{
      reject(error)
    }
  })
}

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState({
    data:"",
    contentType:"image/*"
  });

  const createPost = async (newImage) =>{
    const authToken = getCookie(tokenName);
        // if(!authToken){
        //     navigate('/login');
        // }
     
        try{
          const axiosInstance = axios.create({
            headers: {
              common: {
                Authorization: `Bearer ${authToken}`
              }
            }
          });
          const lcresponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/edit/profileImage`,newImage);
          console.log(lcresponse)
        } catch(e){

        }
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setSelectedImage({data:base64,contentType:'image/*'});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createPost(selectedImage);
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="file-upload">
              click
          </label>
          <input
            type="file"
            label="Image"
            name="myfile"
            id="file-upload"
            accept=".jpeg, .jpg, .png"
            className=""
            onChange={handleImageChange}
          >
          </input>
          <button>submit</button>
       </form> 
      {/* <h2>Image Upload Form</h2>
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
      )} */}
    </div>
  );
};

export const PROFILE_TOP = () => {
  return(
    <div className='h-1/5 bg-[#253D5B] text-white rounded-t-2xl flex px-8 items-center mt-2'>
        <div className='h-[10rem] w-[10rem] rounded-full transform translate-y-[40%]'>
          <ImageUpload/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXStJ9Q_xhBhyfeL87XBiTJASapltM_J8Ddg&usqp=CAU' alt='profile pic' className='rounded-full'></img>
        </div>
        <div className='flex flex-col gap-2 mx-10'>
          <div className='flex gap-2'>
            <div className=' text-5xl'>Muruga Perumal R</div>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4nO2ZO2gVQRSGP70xoLHQwicWBhULQVFRW1EktZhGQQtLH7ET0kVREJtgYyESSW6iBBS0sVIrEXyAqUVsEowWvoiiV/SODMziYdnHzOzrLtwfTnPnzNn/nzl7zsxe6KKLjsBy4DBwFXgCvAU+AQr4CswBM8BtYBjYByymA6CJTADfDVkX+2gEb6iC+GbgLtD2IB62FnAF6CuL/AlgIQfiYXsDbCuSuM7Z6wUQV8K+AHuKIL8IuFEweWVMv/yb8hZwsSTyytjLPKvUfuBPyQIUcDIP8kuB2QrIK2DePD8TzmckocvspOkVPiV3MAv5PtFNfW1MxGt6zL+XRcAxy9VtJqzugIgXVLG2mZM0L7DPWQQ8TAk+InwnI8a/Ab2iDAfvkiYeYMRiF1b5kF8C/EwI+hhopKTHtBjfLX6XAhomVpKAHT4CdqYcwtZblNmjMX3kL3BIjK0G3ic8z6upHY8Jph9+UPitNeUu7PcbWCn8ZkLj82ZugAMJvUYvkDPOxgQbt9z+R8Jvo2Uajsf4vTDvkBOGMwoYEn5DlgImEtJIZ4QTziWkkMzfNTH52y98okR+ANY5HFfmXO8LgwnB0h7+WoytMO+DzyKohLKdil0pwcLbL/vAhZRmqFPFpYwqYz9crp8Nc7mwXZEp8buu+QGmI+ZpsS6NTMX0kFTcTwmmjwF3QkeCWVExek03jprXNHPbjgK0/15bAUccgytz3gkw4DFfWdg1WwE9HncBucVjBQkYxQGnPbbY9qTpYzolt7oIaEQcA6qwtvkOtQXPr2+tigVsJyNOVSwgF9yqu4BlwLs6C/CpSh0noL8C8gt5CuipQMBzckbZAs7UWcAr8WmmdgKehi7+HSvgJvAAeGYu8FPmJFzYn4B5CygdtRfQypH8ryoEXM5JhI5xqQoBXXTBf/wDVNJccyCI65wAAAAASUVORK5CYII=" alt='dev'/>
            </div>
          </div>
          <div>murugaperumal@gmail.com</div>
        </div>
      </div>
  )
}

export const USERNAME_EDIT = () => {
  const [edit, setEdit] = useState(false)
  const [username, setUserName] = useState();
  const myUserDetails = useSelector((state)=>state.userDetails);
  const {userDetials} = myUserDetails;
  useEffect(()=>{
    setUserName(userDetials.username);
  },[])
  const handleSave= (e) => {
    setUserName(e.target.value);
  }

  const handleEdit= (val) =>{
    if(val===true){
      setEdit(val)
    }
    else{
      setEdit(val)
    }
  }

  return(
    <>
      <div className="flex justify-between p-4 border-b-2 text-lg items-center">
        <div className="flex-row sm:flex justify-between w-full items-center">
          <div className="">
            username
          </div>
          <div className='w-[65%] mr-7'>
            {
              (edit===true)?
              <input className="bg-white w-full px-4" value={username} />:
              <input className="bg-transparent w-full px-4" readOnly value={username}/>
            }
          </div>
        </div>
        {/* <div>
          {
            (edit===false)?
            <button onClick={()=>handleEdit(!edit)} className="px-2 py-1">
              Edit
            </button>
            :
            <div className="flex gap-3">
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1 text-white rounded-md bg-slate-600">
                Save
              </button>
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1">
                Cancel
              </button>
            </div>
            
          }
        </div> */}
      </div>
    </>
  )
}

export const LEETCODE_EDIT = () => {
  const [edit, setEdit] = useState(false)
  const [username,setUsername] = useState('anonymous');
  const myUserDetails = useSelector((state)=>state.userDetails);
  const {userDetials} = myUserDetails;
  useEffect(()=>{
    setUsername(userDetials.leetcode);
  },[])
  const handleEdit= (val) =>{
    if(val===true){
      setEdit(val)
    }
    else{
      setEdit(val)
    }
  }
  const submitLeet =async () =>{
    const authToken = getCookie(tokenName);
    try{
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`
          }
        },
      });

      const lcresponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/edit/leetcode`,{newUsername:username});
      console.log(lcresponse.body);
    }catch(err){

    }
  }
  return(
    <>
      <div className="flex justify-between p-4 border-b-2 text-lg items-center">
        <div className="flex-row sm:flex justify-between w-full items-center">
          <div className="">
            Leetcode Userid
          </div>
          <div className='w-[65%] mr-7'>
            {
              (edit===true)?
              <input className="bg-white w-full px-4" value={username} onChange={(e)=>setUsername(e.target.value)}/>:
              <input className="bg-transparent w-full px-4" readOnly value={username}/>
            }
          </div>
        </div>
        <div>
          {
            (edit===false)?
            <button onClick={()=>handleEdit(!edit)} className="px-2 py-1">
              Edit
            </button>
            :
            <div className="flex gap-3">
              <button onClick={()=>{
                handleEdit(!edit)
                submitLeet();
              }}  className="px-2 py-1 text-white rounded-md bg-slate-600">
                Save
              </button>
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1">
                Cancel
              </button>
            </div>
            
          }
        </div>
      </div>
    </>
  )
}

export const CODEFORCES_EDIT = () => {
  const [edit, setEdit] = useState(false)
  const [username,setUsername] = useState('anonymous');

  const myUserDetails = useSelector((state)=>state.userDetails);
  const {userDetials} = myUserDetails;
  useEffect(()=>{
    setUsername(userDetials.codeforces);
  },[])

  const handleEdit= (val) =>{
    if(val===true){
      setEdit(val)
    }
    else{
      setEdit(val)
    }
  }

  const submitLeet =async () =>{
    const authToken = getCookie(tokenName);
    try{
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`
          }
        },
      });

      const lcresponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/edit/codeforces`,{newUsername:username});
      console.log(lcresponse.body);
    }catch(err){

    }
  }

  return(
    <>
      <div className="flex justify-between p-4 border-b-2 text-lg items-center">
        <div className="flex-row sm:flex justify-between w-full items-center">
          <div className="">
            CodeForces Username
          </div>
          <div className='w-[65%] mr-7'>
            {
              (edit===true)?
              <input className="bg-white w-full px-4" value={username} onChange={(e)=>setUsername(e.target.value)}/>:
              <input className="bg-transparent w-full px-4" readOnly value={username}/>
            }
          </div>
        </div>
        <div>
          {
            (edit===false)?
            <button onClick={()=>{
              handleEdit(!edit)
              }} className="px-2 py-1">
              Edit
            </button>
            :
            <div className="flex gap-3">
              <button onClick={()=>{
                handleEdit(!edit)
                submitLeet();
                }}  className="px-2 py-1 text-white rounded-md bg-slate-600">
                Save
              </button>
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1">
                Cancel
              </button>
            </div>
            
          }
        </div>
      </div>
    </>
  )
}

export const CODECHEF_EDIT = () => {
  const [edit, setEdit] = useState(false)
  const [username,setUsername] = useState('anonymous');

  const myUserDetails = useSelector((state)=>state.userDetails);
  const {userDetials} = myUserDetails;
  useEffect(()=>{
    setUsername(userDetials.codechef);
  },[])
  const handleEdit= (val) =>{
    if(val===true){
      setEdit(val)
    }
    else{
      setEdit(val)
    }
  }

  const submitLeet =async () =>{
    const authToken = getCookie(tokenName);
    try{
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`
          }
        },
      });

      const lcresponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/edit/codechef`,{newUsername:username});
      console.log(lcresponse.body);
    }catch(err){

    }
  }

  return(
    <>
      <div className="flex justify-between p-4 border-b-2 text-lg items-center">
        <div className="flex-row sm:flex justify-between w-full items-center">
          <div className="">
            CodeChef UserId
          </div>
          <div className='w-[65%] mr-7'>
            {
              (edit===true)?
              <input className="bg-white w-full px-4" value={username} onChange={(e)=>setUsername(e.target.value)}/>:
              <input className="bg-transparent w-full px-4" readOnly value={username}/>
            }
          </div>
        </div>
        <div>
          {
            (edit===false)?
            <button onClick={()=>{
                handleEdit(!edit)
                }} className="px-2 py-1">
              Edit
            </button>
            :
            <div className="flex gap-3">
              <button onClick={()=>{
                handleEdit(!edit)
                submitLeet();
                }}  className="px-2 py-1 text-white rounded-md bg-slate-600">
                Save
              </button>
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1">
                Cancel
              </button>
            </div>
            
          }
        </div>
      </div>
    </>
  )
}

export const GITHUB_EDIT = () => {
  const [edit, setEdit] = useState(false)
  const [username,setUsername] = useState('anonymous');
  const myUserDetails = useSelector((state)=>state.userDetails);
  const {userDetials} = myUserDetails;
  useEffect(()=>{
    setUsername(userDetials.github);
  },[])
  const submitLeet =async () =>{
    const authToken = getCookie(tokenName);
    try{
      const axiosInstance = axios.create({
        headers: {
          common: {
            Authorization: `Bearer ${authToken}`
          }
        },
      });

      const lcresponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/edit/github`,{newUsername:username});
      console.log(lcresponse.body);
    }catch(err){

    }
  }

  const handleEdit= (val) =>{
    if(val===true){
      setEdit(val)
    }
    else{
      setEdit(val)
    }
  }

  return(
    <>
      <div className="flex justify-between p-4 border-b-2 text-lg items-center">
        <div className="flex-row sm:flex justify-between w-full items-center">
          <div className="">
            GitHub UserId
          </div>
          <div className='w-[65%] mr-7'>
            {
              (edit===true)?
              <input className="bg-white w-full px-4" value={username} onChange={(e)=>setUsername(e.target.value)}/>:
              <input className="bg-transparent w-full px-4" readOnly value={username}/>
            }
          </div>
        </div>
        <div>
          {
            (edit===false)?
            <button onClick={()=>handleEdit(!edit)} className="px-2 py-1">
              Edit
            </button>
            :
            <div className="flex gap-3">
              <button onClick={()=>{
                handleEdit(!edit)
                submitLeet();
                }}  className="px-2 py-1 text-white rounded-md bg-slate-600">
                Save
              </button>
              <button onClick={()=>handleEdit(!edit)}  className="px-2 py-1">
                Cancel
              </button>
            </div>
            
          }
        </div>
      </div>
    </>
  )
}

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
            <div className='p-4 gap-y-10 flex flex-col'>
                {
                    show == false ? 
  
                    <div className='text-xl'>
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
     
          <div className='bg-gray-500 p-4 gap-y-10 flex flex-col'>
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
    
          <div className='bg-gray-500 p-4 gap-y-10 flex flex-col'>
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
       
          <div className='bg-gray-500 p-4 gap-y-10 flex flex-col'>
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
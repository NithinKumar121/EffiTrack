import { useState } from "react";

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
                      <label>name:</label> <span>cibiyanna</span>
                    </div>
                    :
  
                    <div>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <div className="flex flex-row gap-x-6">
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            value={leetcode_username}
                            onChange={handleNameChange}
                            required
                          />
                        </div>
                        <div className="text-center bg-teal-500 rounded-xl">
                          <button type="submit">Save</button>
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
                    <label>name:</label> <span>cibiyanna</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          value={leetcode_username}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                      <div className="text-center bg-teal-500 rounded-xl">
                        <button type="submit">Save</button>
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
                    <label>name:</label> <span>cibiyanna</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          value={leetcode_username}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                      <div className="text-center bg-teal-500 rounded-xl">
                        <button type="submit">Save</button>
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
                    <label>name:</label> <span>cibiyanna</span>
                  </div>
                  :

                  <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                      <div className="flex flex-row gap-x-6">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          value={leetcode_username}
                          onChange={handleNameChange}
                          required
                        />
                      </div>
                      <div className="text-center bg-teal-500 rounded-xl">
                        <button type="submit">Save</button>
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
    GITHUB_USERNAME,  CODECHEF_USERNAME,CODEFORCES_USERNAME , LEETCODE_USERNAME
}
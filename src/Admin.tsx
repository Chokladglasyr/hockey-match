import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Attendee {
  _id: string;
  name: string;
  email: string;
  staying: boolean;
  banquet: boolean;
  allergy: string;
  other: string;
}

function Admin() {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("token")
  const [message, setMessage] = useState("")
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({name:"", email:""})
  const API_URL = import.meta.env.VITE_API_BASE_URL_LOCAL;
  
  useEffect(() => {
    // console.log(API_URL)
    const fetchAttendee = async () => {
      try {
        const res = await fetch(`${API_URL}/admin/`);
        const data = await res.json();

        setAttendees(data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Failed to fetch attendees: ", err);
        }
        setLoading(false);
      }
    };
    fetchAttendee();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const loginAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await fetch(`${API_URL}/admin/login`, {
        headers: {"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify({...formData})
      })
      const data = await res.json()
      console.log(data.message)
      if(data.message){
        setMessage(data.message)
      }
      if(data.message === "Pass") {
        sessionStorage.setItem("token","pass")
        navigate("/admin")
      }

    }catch(err: unknown) {
      if(err instanceof Error) {
        console.error("Failed to login: ", err)
      }
    }
  }
  if(!auth) {
    return (
      <>
      <form onSubmit={loginAdmin}>
        <input type="text" name="name" id="name" placeholder="Name" onChange={handleInput} required/>
        <input type="password" name="password" id="password" placeholder="Password" onChange={handleInput} required/>
        <button>Login</button>
      </form>
      <p>{message}</p>
      </>
    )
  } else{
    return (
      <>
      <h1>Admin</h1>
      if (loading) return <p>Loading...</p>;
      <article className="admin">
        {attendees.map((attendee) => (
          <div className="card" key={attendee._id}>
            <div>
            <p><strong>Name:</strong> {attendee.name}</p>
            <p><strong>Email:</strong> {attendee.email}</p>
            <p><strong>Allergies:</strong> {attendee.allergy ? attendee.allergy : "None"}</p>
            <p><strong>Other:</strong> {attendee.other ? attendee.other : "None"}</p>
            </div>
            <div>
            <p><strong>Will be staying:</strong> {attendee.staying ? "Yes" : "No"}</p>
            <p><strong>Will attend banquet: </strong>{attendee.banquet ? "Yes" : "No"}</p>   
            </div>

          </div>
        ))}
      </article>
    </>
  );
  }
  
}
export default Admin;

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
  const [filter, setFilter] = useState("all")
  
  useEffect(() => {
 
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

  const filteredAttendees = attendees.filter((attendees) => {
    if(filter === "all") return true;
    if(filter === "staying") return attendees.staying;
    if(filter === "banquet") return attendees.banquet
  })

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
      // console.log(data.message)
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
      <main>
      <form onSubmit={loginAdmin}>
        <input type="text" name="name" id="name" placeholder="Name" onChange={handleInput} required/>
        <input type="password" name="password" id="password" placeholder="Password" onChange={handleInput} required/>
        <button className="BTN" id="login">LOGIN</button>
      </form>
      <p>{message}</p>

      </main>
      </>
    )
  } else{
    return (
      <>
      <main id="admin">
      <h1>Admin</h1>
      <label htmlFor="sort">Filter by:</label>
      <select name="sort" id="sort" value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="banquet">Attending banquet</option>
        <option value="staying">Wants to stay</option>
      </select>
      <article className="admin">
        <h3>Total: {filteredAttendees.length}</h3>
      {loading ? <p>Loading...</p> : <p></p>}
        {filteredAttendees.map((attendee) => (
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

      </main>
    </>
  );
  }
  
}
export default Admin;

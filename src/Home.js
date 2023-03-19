import NoteList from "./NoteList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: notes } = useFetch('http://localhost:8000/notes')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { notes && <NoteList notes={notes} /> }
    </div>
  );
}
 
export default Home;
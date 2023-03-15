import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ChoreForm from "../components/ChoreForm";
import ChoreItem from "../components/ChoreItem";
import Spinner from "../components/Spinner";
import { getChores, reset } from "../features/chores/choreSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const {chores, isLoading } = useSelector(
    (state) => state.chores
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getChores());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome, {user && user.first_name}</h1>
        <p>Chores Dashboard</p>
      </section>
      <ChoreForm />

      <section className="content">
        {chores.length > 0 ? (
          <div className="chores">
            {chores.map(chore => (
              <ChoreItem key={chore._id} chore={chore}/>
            ))}
          </div>
        ) : (
          <h3>You have not set any chores</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;

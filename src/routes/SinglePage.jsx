import { useParams, useNavigate } from 'react-router-dom';

function Single({ zoo }) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const category = urlParams.category;
  const name = urlParams.name;
  const item = zoo[category].find((el) => {
    return el.name === name;
  });

  return (
    <main className="single__view">
      <h2 className="single__view-title">{item.name}</h2>
      <p className="single__view-likes">Likes: {item.likes}</p>
      <button className="single__view-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <img
        src={`https://source.unsplash.com/800x400/?${item.name}`}
        alt={`${item.name}`}
      />
    </main>
  );
}

export default Single;

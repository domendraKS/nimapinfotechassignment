const PersonCard = ({ person }) => {
  const { name, profile_path, character } = person;
  return (
    <div className="person-card max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
      />
      <div className="px-6 py-4 text-white text-left">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-base">Character: {character}</p>
      </div>
    </div>
  );
};

export default PersonCard;

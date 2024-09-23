import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => {
        setPerson(response.data.cast);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {movie && (
        <div className="bg-[#020a16] p-2 rounded-md w-full flex">
          <div className="md:w-[60%] w-full">
            <div className="flex">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-1/4 rounded-lg"
              />
              <div className="ml-4 mt-4 flex flex-col gap-2">
                <h1 className="text-3xl text-white font-semibold mb-4">
                  {movie.title}
                </h1>
                <p className="text-[#7297c0] text-xl">
                  Rating: {movie.vote_average.toFixed(1)}
                </p>
                <div className="mt-2 flex gap-5">
                  <p className="max-w-20 text-center p-[2px] text-white border border-gray-500 rounded-md">
                    {movie.runtime} min
                  </p>
                  <p className="text-[#8ea0b5]">
                    {movie.genres.map((data) => (
                      <span key={data.id}>
                        {data.name}
                        {data.id !== movie.genres[movie.genres.length - 1].id &&
                          ", "}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="my-2 text-white">
                  Release Date: {movie.release_date}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-3xl">Overview</p>
              <p className="text-[#d5dadf] mb-4 text-lg">{movie.overview}</p>
            </div>
          </div>
          <div className="backdropImage">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="h-full object-contain w-full"
            />
          </div>
        </div>
      )}
      <div className="my-2">
        <span className="block text-white font-semibold text-xl my-2">
          Cast
        </span>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 1900,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {person &&
            person.map((data) => (
              <SwiperSlide key={data.id}>
                <PersonCard person={data} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieDetailPage;

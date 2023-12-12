export default function Map() {
  return (
    <div>
      <p>HER SKAL DU &quot;MAP MAP MAP&quot; NOGLE TING</p>
    </div>
  );
}

const [genre, setGenre] = useState("All");
const [favorite, setFavorite] = useState(storedFavorites);
const [showFaves, setShowFaves] = useState(false);
const [dayFilter, setDayFilter] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

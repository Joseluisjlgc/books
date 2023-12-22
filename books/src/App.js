import GlobalRouter from "./routes/GlobalRouter.js";
import {BookContext} from "./context/BookContext.js";
import {UserContext} from "./context/UserContext.js";
import {useBooks} from "./hooks/useBooks.js";
import {useUser} from "./hooks/useUser.js";
import {Footer} from "./components/Footer.js";
import './styles/footer.css';

function App() {

    const books = useBooks();
    const user = useUser();
    return (
        <BookContext.Provider value={{books}}>
            <UserContext.Provider value={{user}}>
                <GlobalRouter></GlobalRouter>
                <Footer />
            </UserContext.Provider>
        </BookContext.Provider>
    );
}

export default App;
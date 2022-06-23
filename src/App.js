import Characters from "./components/Characters";


function App() {
    return (
        <div>
            <Characters
                id={1}
                name={"Rick Sanchez"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                alt={'Rick Sanchez'}
            />
            <Characters
                id={2}
                name={"Morty Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                alt={'Morty Smith'}
            />
            <Characters
                id={3}
                name={"Summer Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                alt={'Summer Smith'}
            />
            <Characters
                id={4}
                name={"Beth Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                alt={'Beth Smith'}
            />
            <Characters
                id={5}
                name={"Jerry Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                alt={'Jerry Smith'}
            />
            <Characters
                id={6}
                name={"Abadango Cluster Princess"}
                status={"Alive"}
                species={"Alien"}
                gender={"Female"}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                alt={'Abadango Cluster Princess'}
            />

        </div>
    );
}

export default App;

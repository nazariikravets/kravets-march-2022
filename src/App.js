import Characters from "./components/Characters";

function App() {
    return (
        <div>
            <Characters
                name={'Барт'}
                desc={'Бартоломью "Барт" ДжоДжо/Джей Симпсон (1 апреля 1979) (запланированное имя – Морт Симпсон) (англ. Bart Simspon) – озорной и "особо опасный"'}
                img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                alt={'Барт Симпсон'}
            />

            <Characters
                name={'Гомер'}
                desc={'Гомер Джей Симпсон старший (англ. Homer Jay Simpson, Sr.) (род. 10 мая 1950 cудя по разным сериям) – один из главных героев сериала.'}
                img={'https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png'}
                alt={'Гомер Симпсон'}
            />
            <Characters
                name={'Мардж'}
                desc={'Марджори "Мардж" Жаклин Симпсон (англ. Marjorie Jacqueline "Marge" Simpson) (в девичестве Бувье) (англ. Bouvier) — жена Гомера и мать их троих детей'}
                img={'https://static.wikia.nocookie.net/simpsons/images/0/0b/Marge_Simpson.png'}
                alt={'Мардж Симпсон'}
            />
            <Characters
                name={'Лиза'}
                desc={'Лиза Симпсон (род. 9 мая 1981) – харизматичная восьмилетняя девочка с очень высоким уровнем интеллекта, средний ребенок в семье Симпсонов,'}
                img={'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png'}
                alt={'Лиза Симпсон'}
            />
            <Characters
                name={'Абрахам'}
                desc={'Абрахам Джей Симпсон родился в семье Орвилла Симпсона и Юмы Хикмен. Когда его семья иммигрировала в США, первое время они жили внутри головы Статуи'}
                img={'https://static.wikia.nocookie.net/simpsons/images/c/c5/Abraham_Simpson_-_shading.png'}
                alt={'Абрахам Симпсон'}
            />


        </div>
    );
}

export default App;

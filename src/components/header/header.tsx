import * as C from "./styled";
import { useEffect, useState } from 'react';

const dimensão = "70";

const number = 0 >= 99;

export const Header = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    var input = <></>
    var inputmobile = <></>

    if (windowSize.innerWidth > 698) {
        input =
            <C.bgInput>
                <input type="text" name="" id="" placeholder="Procurando algum produto?" />
                <C.Lupa>
                    <button>
                        <img src="img/area/lupa.png" alt="" height="21" />
                    </button>
                </C.Lupa>
            </C.bgInput>
    } else {
        inputmobile =
            <C.bgInput>
                <input type="text" name="" id="" placeholder="Procurando algum produto?" />
                <C.Lupa>
                    <button>
                        <img src="img/area/lupa.png" alt="" height="21" />
                    </button>
                </C.Lupa>
            </C.bgInput>
    }

    return (
        <C.Container>
            <C.faixa>
                <C.position>
                    FRETE GRATIS PARA TODO BRASIL <img src="./img/faixa/brasil.png" alt="" />
                </C.position>
            </C.faixa>
            <C.area>
                <C.positionarea>
                    <C.imgposition>
                        <img src="img/area/logo.png" alt="" height={dimensão} />
                    </C.imgposition>
                    <C.inputSearch>
                        {input}
                    </C.inputSearch>
                    <div className="d-flex">
                        <img src="./img/area/usuario.png" alt="" />
                        <div className="line"></div>
                        <img src="./img/area/carrinho.png" alt="" />
                        <div className="carrinhoadd">
                            {number ? 0 : 99 + "+"}
                        </div>
                    </div>
                    {inputmobile}
                </C.positionarea>
            </C.area>
            <C.categoria>
                <ul className="d-flex">
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </C.categoria>
        </C.Container>
    )
}
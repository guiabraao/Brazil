import './styles.css'
import GreenStar from '../assets/greenStar.svg'
import YellowStar from '../assets/yellowStar.svg'
import Logo from '../assets/logo.png'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scene from '../Scence.jsx'
import { useEffect, useRef, useLayoutEffect } from 'react'
import Pele01 from '../assets/pele01.png'
import Pele02 from '../assets/pele02.png'
import Um1958 from '../assets/1958um.jfif'
import Dois1958 from '../assets/1958dois.jpg'
import Camisa62 from '../assets/62.gif'
import Big1962 from '../assets/1962big.jpg'
import Mid1962 from '../assets/1962mid.jpg'
import Low1962 from '../assets/1962low.jpg'
import Time70 from '../assets/time70.jpeg'
import Pele3 from '../assets/pele3.jpg'
import Capita from '../assets/capita.webp'
import Dunga from '../assets/dunga.jpg'
import Lenis from 'lenis'
import Selecao94 from '../assets/selecao94.jfif'
import RomarioTaca from '../assets/romarioTaca.webp'
import Bebeto from '../assets/bebeto.jpg'
import Trio94 from '../assets/trio94.jpg'
import Romario from '../assets/romario.jpg'
import Ronaldo from '../assets/ronaldo.jpg'
import Ronaldinho from '../assets/ronaldinho.jpg'
import Selecao02 from '../assets/selecao02.jfif'
import Rivaldo from '../assets/rivaldo.jfif'
import Ronaldos from '../assets/ronaldos.jpg'
import Cafu from '../assets/cafu.webp'
import Camisa2002 from '../assets/camisa2002.gif'


gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    const lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.03,        // quanto menor, mais suave
        wheelMultiplier: 1
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const mainRef = useRef(null)
    const scenceRef = useRef(null)
    const textIntroRef = useRef(null)
    const textIntro2Ref = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top top",
                    end: "+=250%",
                    scrub: 1,
                    pin: true,
                }
            })

            // Texto inicial desaparece
            tl.to(textIntroRef.current, {
                opacity: 0,
                filter: "blur(12px)",
                y: -40,
                ease: "none"
            }, 0)

            // Canvas se move (seu efeito)
            tl.to(scenceRef.current, {
                x: "25vw",
                y: "20vh",
                z: 120,
                ease: "none"
            }, 0)

            tl.to(scenceRef.current, {
                y: "90vh",
                ease: "none"
            }, 0.5)

            // Segundo texto aparece
            tl.fromTo(
                textIntro2Ref.current,
                {
                    opacity: 0,
                    y: 40,
                    filter: "blur(12px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    ease: "none"
                },
                0.7
            )

        }, mainRef)

        return () => ctx.revert()
    }, [])



    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".containerGSAPZoom",
                    start: "top top",
                    end: "+=220%",
                    scrub: true,
                    pin: true,
                }
            })

            // Zoom + 3D
            tl.to(".imageContainer", {
                scale: 5,
                z: 400,
                rotationX: 10,
                ease: "power2.inOut"
            })

            // Fade texto
            tl.to(".section-hero", {
                opacity: 0,
                y: -40,
                ease: "power1.out"
            }, "-=0.6")

            // Logo desaparece (APÓS o zoom)
            tl.to(".imageContainer", {
                opacity: 0,
                scale: 6,
                ease: "power2.inOut"
            })

            // Background final entra
            tl.to(".final-bg", {
                opacity: 1,
                ease: "power2.inOut"
            }, "-=0.3")
        })

        return () => ctx.revert()
    }, [])


    gsap.config({
        nullTargetWarn: false,
        invalidateOnRefresh: true
    });

    gsap.defaults({
        ease: "none"
    });

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container1970",
                    start: "top top",
                    end: "+=350%",
                    scrub: true,
                    pin: true,
                }
            })

            tl.fromTo(
                ".boxTxt1970 h1",
                {
                    y: 100,
                    opacity: 1
                },
                {
                    y: -100,
                    opacity: 0,
                    ease: "none"
                },
                0
            )

            /* -----------------
               SUBTÍTULO + PARÁGRAFOS
            ------------------ */
            tl.fromTo(
                ".txt70 h3, .txt70 p",
                {
                    y: 20,
                    opacity: 1
                },
                {
                    y: -120,
                    opacity: 0,
                    stagger: 0.25,
                    ease: "none"
                },
                0.15
            )

        })

        return () => ctx.revert()
    }, [])

    const containerRef = useRef(null);
    const panelsRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const panels = panelsRef.current;
        if (!container || !panels) return;

        const ctx = gsap.context(() => {
            const getScrollAmount = () =>
                panels.scrollWidth - window.innerWidth;

            gsap.to(panels, {
                x: () => -getScrollAmount(),
                scrollTrigger: {
                    trigger: container,
                    scrub: 0.5,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = document.querySelector(".containerGSAP94");
        const panelsWrapper = document.querySelector(".panels94");
        const panels = gsap.utils.toArray(".panels94 section");

        const ctx = gsap.context(() => {

            const totalWidth = panels.length * window.innerWidth;

            const horizontalTween = gsap.to(panelsWrapper, {
                x: () => -(totalWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    id: "horizontal94",
                    trigger: container,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            /* --------------------------------
               ANIMAÇÕES INTERNAS (TEXTOS / IMGS)
            --------------------------------- */

            panels.forEach((panel) => {

                // textos
                gsap.from(
                    panel.querySelectorAll("h1, h2, h3, p"),
                    {
                        y: 60,
                        opacity: 0,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: horizontalTween,
                            start: "left center",
                            end: "center center",
                            scrub: true
                        }
                    }
                );

                // imagens
                gsap.from(
                    panel.querySelectorAll("img"),
                    {
                        scale: 0.9,
                        opacity: 0,
                        y: 40,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: horizontalTween,
                            start: "left center",
                            end: "center center",
                            scrub: true
                        }
                    }
                );

            });

        }, container);

        return () => ctx.revert();
    }, []);



    return (
        <>
            <main>
                <header>
                    <div className="nav-header">
                        <ul>
                            <li><span className='yellow'>1958</span></li>
                            <li><span className='green'>1962</span></li>
                            <li><span className='blue'>1970</span></li>
                            <li><span className='green'>1994</span></li>
                            <li><span className='yellow'>2002</span></li>
                        </ul>
                    </div>
                </header>

                <div className="containerIntro">
                    <div className="boxTopIntro">
                        <div className="logo"><img src={Logo} alt="" /></div>
                        <p>THE ONLY 5 TIMES WORLD CHAMPION</p>
                        <div className="boxStarIntro">
                            <img src={GreenStar} alt="" />
                            <img src={GreenStar} alt="" />
                            <img src={GreenStar} alt="" />
                            <img src={GreenStar} alt="" />
                            <img src={GreenStar} alt="" />
                        </div>
                        <h1><span className='blue'>J</span><span className='green'>OG</span><span className='blue'>A</span> <span className='green'>B</span><span className='blue'>O</span><span className='green'>NI</span><span className='blue'>TO</span></h1>
                        <h2><span className='green'>THE</span> <span className='blue'>BRAZIL</span><span className='green'>IAN</span> <span className='blue'>WAY</span></h2>
                    </div>
                </div>
                <div className="containerAnimationIntro" ref={mainRef}>

                    <div className="boxTxtAniIntro" ref={textIntroRef}>
                        <p>BOLD FLAVORS FROM THE KITCHEN OF INDIA. CRAFTED FOR THOSE WHO CRAVE MORE. </p>
                        <button>SAIBA MAIS</button>
                    </div>

                    <div className="boxCanvas" ref={scenceRef}>
                        <Canvas>
                            <Scene />
                        </Canvas>
                    </div>

                    <div className="boxTxtIntro2" ref={textIntro2Ref}>
                        <h1>A NEW PERSPECTIVE ON CHAMPIONSHIP’S</h1>
                    </div>
                </div>

                <div className="container1958" ref={containerRef}>
                    <div className="panels1958" ref={panelsRef}>
                        <div className="box1958">
                            <div className="boxText1958">
                                <div className="title1958">
                                    <h1>1958</h1>
                                    <img src={YellowStar} alt="" />
                                </div>
                                <h2>O NASCIMENTO DE UM GIGANTE</h2>
                                <p>A Copa do Mundo de 1958 marcou o nascimento do Brasil como potência do futebol mundial. Disputada na Suécia, a competição revelou ao planeta o talento de um jovem Pelé, então com apenas 17 anos, além de Garrincha, Didi e Vavá. A seleção brasileira encantou com um estilo ofensivo, criativo e alegre, vencendo a final contra os anfitriões por 5 a 2. Mais do que um título, 1958 representou o início de uma identidade futebolística que mudaria a história do esporte.</p>
                                <div className="pele01"><img src={Pele01} alt="" /></div>
                            </div>
                            <div className="imgs1958">
                                <div className="topImg1958">
                                    <img src={Um1958} alt="" />
                                    <div className="txtImgTop1958">
                                        <h2>O MUNDO DESCOBRE O BRASIL</h2>
                                        <p>Na Copa do Mundo de 1958, o Brasil não conquistou apenas um título — conquistou respeito. Com um estilo jamais visto até então, a seleção mostrou que o futebol podia ser arte. A vitória na final contra a Suécia revelou ao mundo nomes que se tornariam eternos e deu início à trajetória mais vitoriosa da história das Copas.</p>
                                    </div>
                                </div>
                                <div className="bottomImg1958"><img src={Dois1958} alt="" /></div>
                            </div>
                            <div className="imgPele02">
                                <img src={Pele02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerGSAPZoom">
                    <div className="contentGSAPZoom">

                        <div className="final-bg"></div>
                        <div className="blur-layer"></div>

                        <section className="section-hero">
                            <p>A camisa pesou. E venceu.</p>
                        </section>

                        <div className="imageContainer">
                            <img src={Logo} alt="" className="logoGSAP" />
                        </div>

                    </div>
                </div>

                <div className="txtIntro1962">
                    <h1>TRADITION & PERSPECTIVE</h1>
                </div>

                <div className="container1962">

                    <div className="title1962">
                        <h2>1962</h2>
                        <div className="stars1962">
                            <img src={GreenStar} alt="" />
                            <img src={GreenStar} alt="" />
                        </div>
                        <p>“Não era um craque. Era uma nação inteira jogando.”</p>
                    </div>

                    <div className="box1962">
                        <div className="left1962">
                            <div className="bigImg1962"><img src={Big1962} alt="" /></div>
                            <div className="midImg1962"><img src={Mid1962} alt="" /></div>
                            <div className="lowImg1962"><img src={Low1962} alt="" /></div>
                        </div>

                        <div className="right1962">
                            <h1><span className='green'>A</span> <span className='blue'>FORÇA</span> <span className='green'>DE</span> UMA <span className='green'>SELEÇÃO</span>, <span className='blue'>NÃO DE</span> <span className='green'>UM</span> SÓ <span className='green'>NOME</span></h1>
                        </div>
                    </div>

                    <div className="textBottom1962">
                        <p>A conquista de 1962 mostrou que o Brasil não dependia de um único craque para vencer. Com talento espalhado por todo o time e atuações históricas de Garrincha, a seleção superou adversidades e confirmou o bicampeonato. Era a prova definitiva de que o Brasil havia criado uma escola de futebol.</p>
                    </div>

                    <div className="gif1962Box">
                        <img src={Camisa62} alt="" />
                    </div>

                </div>

                <div className="container1970">

                    <div className="box1970">

                        <div className="left1970">
                            <div className="bigImg1970"><img src={Pele3} alt="" /></div>
                            <div className="midImg1970"><img src={Time70} alt="" /></div>
                            <div className="smallImg1970"><img src={Capita} alt="" /></div>
                        </div>

                        <div className="right1970">

                            <div className="titile1970">
                                <div className="star1970">
                                    <img src={YellowStar} alt="" />
                                    <img src={YellowStar} alt="" />
                                    <img src={YellowStar} alt="" />
                                </div>
                                <h2>1970</h2>
                            </div>

                            <div className="boxTxt1970">
                                <h1><span className='yellow'>FUTEBOL</span> <span className='green'>QUE</span> VIROU <span className='blue'>ARTE</span></h1>
                                <section className='txt70'>
                                    <h3>O MAIOR TIME DA HISTÓRIA</h3>
                                    <p>A Copa do Mundo de 1970, no México, é considerada por muitos como o auge do futebol brasileiro. Com um time repleto de gênios — Pelé, Jairzinho, Rivelino, Tostão e Carlos Alberto Torres — o Brasil venceu todos os jogos e encantou o planeta. A final contra a Itália terminou em 4 a 1 e selou o tricampeonato, garantindo ao Brasil a posse definitiva da Taça Jules Rimet e eternizando aquela equipe como a maior da história das Copas.</p>
                                    <p>A Copa de 1970 eternizou a seleção brasileira como sinônimo de futebol arte, talento coletivo e genialidade individual.</p>
                                </section>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="containerEraPele">
                    <h1>“FIM DA ERA PELÉ.”</h1>
                </div>

                <div className="containerGSAP94">
                    <div className="panels94">

                        <section className='sectionIntro94'>
                            <div className="boxLeftIntro94">
                                <div className="stars1962">
                                    <img src={YellowStar} alt="" />
                                    <img src={YellowStar} alt="" />
                                    <img src={YellowStar} alt="" />
                                    <img src={YellowStar} alt="" />
                                </div>
                                <h2>1994</h2>
                                <h1><span className='yellow'>A</span> VOLTA <span className='yellow'>AO</span> <span className='blue'>TOPO</span></h1>
                                <p>Depois de um longo jejum, o Brasil voltou a levantar a taça em 1994, nos Estados Unidos. Com uma seleção mais pragmática, forte defensivamente e eficiente no ataque, o time liderado por Romário e Bebeto conquistou o tetracampeonato. A final contra a Itália terminou empatada e foi decidida nos pênaltis, em um dos momentos mais tensos da história das Copas, simbolizando a maturidade e a força mental da seleção brasileira.</p>
                            </div>
                            <div className="boxImg94"><img src={Dunga} alt="" /></div>
                        </section>

                        <section className='sectionRomario'>
                            <div className="boxLeftRomario">
                                <h3>VENCER TAMBÉM É SABER SOFRER</h3>
                                <p>A Copa do Mundo de 1994 marcou uma nova fase do futebol brasileiro. Menos brilho individual, mais organização e eficiência. O título veio após uma final dramática decidida nos pênaltis, simbolizando a resiliência de um time que soube se adaptar para voltar ao topo do mundo.</p>
                                <div className="boxImgs94">
                                    <div className="selecao94"><img src={Selecao94} alt="" /></div>
                                    <div className="romarioTaca"><img src={RomarioTaca} alt="" /></div>
                                    <div className="bebeto"><img src={Bebeto} alt="" /></div>
                                    <div className="trio94"><img src={Trio94} alt="" /></div>
                                </div>
                            </div>
                            <div className="boxRightRomario">
                                <img src={Romario} alt="" />
                            </div>
                        </section>

                    </div>
                </div>

                <div className="container02">

                    <div className="boxIntro02">
                        <div className="ronaldinhoImg img2002">
                            <img src={Ronaldinho} alt="" />
                            <div className="contentImg2002">
                                <h2>Ronaldinho Gaúcho</h2>
                                <p>Gol de falta marcado por Ronaldinho contra a Inglaterra na Copa de 2002, em um chute surpreendente de longa distância que encobriu o goleiro David Seaman. O lance mostrou genialidade e ousadia, garantiu a vitória do Brasil nas quartas de final e se tornou um dos gols mais marcantes da história das Copas.</p>
                            </div>
                        </div>
                        <div className="contentCenter">
                            <div className="stars1962">
                                <img src={GreenStar} alt="" />
                                <img src={GreenStar} alt="" />
                                <img src={GreenStar} alt="" />
                                <img src={GreenStar} alt="" />
                                <img src={GreenStar} alt="" />
                            </div>
                            <h3>2002</h3>
                            <h1>O <span className='green'>FUTEBOL</span> <span className='blue'>BRASILEIRO</span> <span className='green'>NO</span> SEU <span className='green'>ESTADO</span> <span className='blue'>PURO</span></h1>
                            <div className="logo2002"><img src={Logo} alt="" /></div>
                        </div>
                        <div className="ronaldoImg img2002">
                            <img src={Ronaldo} alt="" />
                            <div className="contentImg2002">
                                <h2>Ronaldo Fenômeno</h2>
                                <p>O gol de Ronaldo Fenômeno na final da Copa do Mundo de 2002 simbolizou redenção e grandeza. Aproveitando o rebote do goleiro Oliver Kahn, após chute de Rivaldo, Ronaldo apareceu no momento certo para empurrar para as redes e abrir o caminho do título contra a Alemanha. O lance marcou a volta por cima do camisa 9, que encerrou a Copa como artilheiro e garantiu o pentacampeonato ao Brasil.</p>
                            </div>
                        </div>
                    </div>

                    <div className="imgs2002">
                        <div className="boxImgtop02">
                            <div className="imgtop2002 img2002">
                                <img src={Selecao02} alt="" />
                                <div className="contentImg2002">
                                    <h2>Foto da Seleção na Final</h2>
                                </div>
                            </div>
                        </div>

                        <div className="imgsRow2002">
                            <div className="rivaldo img2002">
                                <img src={Rivaldo} alt="" />
                                <div className="contentImg2002">
                                    <h2>Rivaldo</h2>
                                </div>
                            </div>
                            <div className="ronaldos img2002">
                                <img src={Ronaldos} alt="" />
                                <div className="contentImg2002">
                                    <h2>Ronaldinho e Ronaldo</h2>
                                </div>
                            </div>
                            <div className="cafu img2002">
                                <img src={Cafu} alt="" />
                                <div className="contentImg2002">
                                    <h2>Cafu</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="boxTexts2002">
                        <div className="textLeft">
                            <p>A Copa do Mundo de 2002, realizada na Coreia do Sul e no Japão, marcou o Brasil como o único pentacampeão mundial. Comandada por Ronaldo Fenômeno, que foi o artilheiro do torneio, e contando com Rivaldo, Ronaldinho Gaúcho e Cafu, a seleção teve uma campanha impecável, vencendo todos os jogos. A final contra a Alemanha terminou em 2 a 0 e consolidou o Brasil como a maior seleção da história das Copas do Mundo.</p>
                        </div>
                        <div className="textRight">
                            <p>Com talento, carisma e uma campanha perfeita, o Brasil conquistou o pentacampeonato e marcou definitivamente seu nome na história do futebol.</p>
                        </div>
                    </div>

                    <div className="boxGif2002">
                        <div className="gif2002">
                            <img src={Camisa2002} alt="" />
                        </div>
                    </div>


                </div>

            </main>

        </>
    )
}
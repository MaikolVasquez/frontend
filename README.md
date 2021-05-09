# frontend

## React Curriculum vitae

Realize una maquetacion por componentes, cambie el orden de varias carpetas a diferencia del original por comodidad.

Pasos:
Realize el reto paso a paso valiendome del conocimiento que tengo de React, JavaScript, HTML y CSS.

1) crear los componentes no fue complejo en ese punto lo mas dificil fue la referencia ya que como mencione cambie de lugar varias carpetas para que me fuera mas facil identificar e iniciar. 

2) en los estilos se me fue mas tiempo usando lunacy para ayudarme a ver los colores, y utilizando grid layout, cree un nuevo contenedor llamado Render para integrarle el grid y poder maquetar mas comodamente el resto de componentes. 

3) en este punto decidi hacerla con Promesas ya que por un archivo que logre encontrar despues ques runtime, sale un error al usar asyc functions, pero en los test paso sin problema el consumo de la API.

4) integrar la API al proyecto fue de las ultimas cosas que hice con hooks useState y useEffect y esto fue de lo que mas se me dificulto ya que al intentar acceder a los datos en un array de la API aparecia un error, esto fue solucionado con una tecnica que encontre usando un Loader con useState para que la informacion carge despues de que se hace la peticion asincrona. 

5) cambie los datos de el archivo data.json con mi informacion personal como fue solicitado. 

6) la documentacion es muy importante y estoy dejando constancia paso a paso de lo que se necesito para completar el proyecto, espero sea la informacion lo suficiente mente clara y muchas gracias por la oportunidad. 




## Info adicional

para la ejecucion de funciones asyncronas se nesesita importar este modulo y descargarlo  "import 'regenerator-runtime/runtime'"



para realizar la carga de los datos por fetch y que no salga un error de undefine al validar datos de un array utilize este metodo 

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getInfo()
    },[])


  const getInfo = async ()=>{
      const data = await fetch("http://localhost:3000/data")
      const dataJson = await data.json()      
      setData(dataJson)
      setLoading(false)
}
if(loading) {
    return (
            <></>    )


lo que hace es generar un estado Loading inicia en true cuando useEffect esta solicitando los datos de la API, al terminar y ejecutarse useEfect cambia a Loading a false haciendo que el render del if no se vea y se implemente el siguiente return que debe tener la informacion correcta (revisar componentes como Academic.jsx para mas aclarar el flujo), el credito es de este video si quieren ver mas detalle https://www.youtube.com/watch?v=Vfdy4qAoPYs&list=PLcopsWQXSP_TJefWs4yARQZA9Sk1duSsQ&index=4&t=539s



## Agradecimientos

Agradezco al team Platzi por toda la enseñanza que me han dado por los ultimos años y por mostrarme que si se quiere se puede, se que me falta mucho mucho trabajo para conseguir ser un desarrollador honorable pero lo conseguire, gracias a ustedes y gracias a todos los que enseñan con miras a un mejor futuro, gracias por darme la oportunidad de postularme a Platzi master espero que pueda unirme y ser aun mejor programador.

Gracias.

### Licencia
frontend se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

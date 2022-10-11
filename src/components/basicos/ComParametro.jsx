export default function ComParametro(props) {
    const sub = props.subtitulo
    return (
        <div>
            <p>O aluno <strong>{props.aluno}</strong> tem nota de {props.nota}</p>
        </div>
    )

}
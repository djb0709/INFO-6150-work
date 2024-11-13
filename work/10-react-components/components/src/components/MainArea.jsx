import '../css/mainarea.css'
function MainArea({ changePage }) {

    return (
        <main className='main'>
            {changePage()}
        </main>
    );

}
export default MainArea;
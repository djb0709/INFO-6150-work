import Button from './Button';
import '../css/card.css'
function Card({ setToPage, setMessage }) {

    return (
        <>

            <div className="card">
                <p>card aaaa

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perferendis repellendus non voluptatibus alias aut. Quod fuga libero dolor omnis, non repudiandae quis deserunt cupiditate molestias porro nam possimus eos.
                </p>
                <Button type="button" visual="link" onClick={() => { setToPage("content"), setMessage("card btn clicked") }} >Go to content page</Button>
            </div>
            <div className="card">
                <p>card aaaa
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio quibusdam nobis eius voluptatibus assumenda perspiciatis sapiente molestias, maiores deserunt et praesentium consectetur, at recusandae dolorum architecto blanditiis, esse iure?
                </p>
                <Button type="button" visual="link" onClick={() => { setToPage("panels"), setMessage("card btn clicked") }} >Go to panels page</Button>
            </div>
            <div className="card">
                <p>
                    card Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, itaque nam deserunt iste libero impedit quia totam quidem! Voluptatem saepe doloribus omnis fuga inventore soluta optio nesciunt! Optio, quae quod.
                    Harum doloremque eum odio iure cumque mollitia molestiae. Quidem voluptate accusantium totam dolor, et tempore obcaecati. Atque autem quasi hic repellendus. Blanditiis voluptas incidunt ratione adipisci eos, possimus libero atque.
                </p>

            </div>
        </>
    );
}
export default Card;
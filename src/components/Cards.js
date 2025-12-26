import Card from 'react-bootstrap/Card';

export const Cards = () => {
    return (
        <div className="cards">
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/Inventory-Manager')}>
                <Card.Img variant="top" src="\images\project (1).png" />
                <Card.Body>
                    <Card.Title>Simple Inventory Manager</Card.Title>
                    <Card.Text>
                      A management web application that allows users to keep track of their inventory items. Comes including features such as adding, editing, deleting, and searching for items.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/login-user-table')}>
                <Card.Img variant="top" src="\images\project (2).png" />
                <Card.Body>
                    <Card.Title>Secure Login Page</Card.Title>
                    <Card.Text>
                      Login page built with HTML, CSS, and JavaScript that incorporates security features such as input validation, password hashing, and Oauth.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/music-store')}>
                <Card.Img variant="top" src="\images\project (3).png" />
                <Card.Body>
                    <Card.Title>Music Player</Card.Title>
                    <Card.Text>
                      Mock music player web-app to showcase proficiency in front-end development using React.js and CSS animations. Used AI gen to generate album art, music list and more.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/Entertainment-Tracker')}>
                <Card.Img variant="top" src="\images\project (4).png" />
                <Card.Body>
                    <Card.Title>Entertainment Tracker</Card.Title>
                    <Card.Text>
                      A tracker extension for movies and Tv shows. Built using simple HTML, CSS, and JavaScript to help users keep track of what they have watched and what they want to watch.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/Portfolio/tree/main/Wireshark%20Projects')}>
                <Card.Img variant="top" src="\images\project (5).png" />
                <Card.Body>
                    <Card.Title>Wireshark Log</Card.Title>
                    <Card.Text>
                      Tracked and analyzed network traffic using Wireshark to identify potential security threats and vulnerabilities. Created detailed reports and visualizations to communicate findings.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card' onClick={url=> window.open('https://github.com/UnclElmino/Portfolio/tree/main/System%20diagnosis%20tool')}>
                <Card.Img variant="top" src="\images\project (6).png" />
                <Card.Body>
                    <Card.Title>System Diagnosis Script</Card.Title>
                    <Card.Text>
                      A simple python script used to diagnose and fix common computer issues such as disk errors, memory leaks, and network connectivity problems.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
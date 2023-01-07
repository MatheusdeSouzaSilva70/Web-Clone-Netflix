import "./Header.css"

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : '' } id="header">
        <div className="header--logo">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
          </a>
        </div>
        <div className="header--user">
          <a  href="#header">
          <img src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg" alt="logo-user" />
          </a>
        </div>
    </header>
  )
}

export default Header
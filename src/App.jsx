import { FaFile, FaFolder } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <ul>
        <li>
          <FaFolder style={{ color: "red" }} /> public
          <ul>
            <li>
              <FaFile /> index.html
            </li>
            <li>
              <FaFile /> manifest.json
            </li>
            <li>
              <FaFile /> robots.txt
            </li>
          </ul>
        </li>
        <li>
          <FaFolder style={{ color: "red" }} /> src
          <ul>
            <li>
              <FaFolder style={{ color: "red" }} /> components
              <ul>
                <li>
                  <FaFile /> Drawer.js
                </li>
                <li>
                  <FaFile /> Input.js
                </li>
                <li>
                  <FaFile /> Modal.js
                </li>
              </ul>
            </li>
            <li>
              <FaFolder style={{ color: "red" }} /> styles
              <ul>
                <li>
                  <FaFile /> Input.css
                </li>
                <li>
                  <FaFile /> Drawer.css
                </li>
                <li>
                  <FaFile /> Modal.css
                </li>
                <li>
                  <FaFolder style={{ color: "red" }} /> Custom Styles
                  <ul>
                    <li>
                      <FaFile /> Custom.css
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <FaFolder style={{ color: "red" }} /> modules
            </li>
            <li>
              <FaFile /> App.js
            </li>
            <li>
              <FaFile /> App.css
            </li>
            <li>
              <FaFile /> index.js
            </li>
            <li>
              <FaFile /> styles.css
            </li>
          </ul>
        </li>
        <li>
          <FaFile /> package.json
        </li>
        <li>
          <FaFile /> README.md
        </li>
      </ul>
    </div>
  );
}

export default App;

import { MdLogout } from "react-icons/md";

import "./styles.css";

export default function Header() {
  return (
    <header>
      <h1>ProntoSaúde</h1>
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
      <button>
        <MdLogout />
      </button>
    </header>
  );
}

import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <ul>
              <li>homepage</li>
              <li>rooms</li>
            </ul>
          </div>

        )
    }
}

export default Navbar;
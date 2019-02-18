import React, {Component} from 'react';
import './MoreReleases.css';

class MoreButton extends Component {

  render() {
    return (
      <div className='more-releases'>
        <a href={'http://www.imdb.com/calendar/?region=gb'}>
          Upcoming Releases! >>
        </a>
      </div>
    );
  }

}

export default MoreButton;

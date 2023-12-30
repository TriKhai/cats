import React, { Component } from 'react'
import styler from './Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={`${styler.footer__container} container`}>
          <div className={`${styler.footer_content} row`}>
            <div className={`${styler.footer_item} col-4`}>
              <h3>About us</h3>
              <p>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.</p>
            </div>
            <div className={`${styler.footer_item} col-4`}>
              <h3>Lecture</h3>
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
              <p>C#</p>
              <p>Python</p>
            </div>
            <div className={`${styler.footer_item} col-4`}>
              <h3>Contact Info</h3>
              <p>Address: Kiên Giang</p>
              <p>Email: <a href='trikhai2004@gmail.com'>trikhai2004@gmail.com</a></p>
              <p>Phone: <a href='tel:0848041842'>084.804.1482</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

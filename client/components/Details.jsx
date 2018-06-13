import React, { Component } from 'react';
import styles from './Details.css'
import moment from 'moment';

export default class Details extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const isOpen1 = this.props.isOpen1;
    const isOpen2 = this.props.isOpen2;
    const hours = this.props.hours;
    const today = hours[moment().format('ddd')];
    const details = this.props.details;
    const priceString = "'" + details.Price_Range + "'";
    const price = Math.abs(priceString.slice(4,-1));
    const health = details.Health_Score;
    
    return(
      <div>
        <table className={styles.table}>
          <tr>
            { 
              isOpen1 || isOpen2 ?
                <td className={[styles.green, styles.widthCol1, styles.center].join(' ')}><i class="far fa-clock"></i></td>
                :
                <td className={[styles.red, styles.widthCol1, styles.center].join(' ')}><i class="far fa-clock"></i></td>
            }
            <td className={styles.grayBorder}><pre className={styles.preReset}>Today  <span className={styles.bold}>{today} 
              {
                isOpen1 || isOpen2 ?
                  <span className={[styles.green, styles.bottom].join(' ')}>  Open now</span>
                  :
                  <span className={[styles.red, styles.bottom].join(' ')}>  Closed now</span>
              }
                </span>
              </pre>
            </td>
          </tr>
          <tr>
            <td className={styles.center}><i class="fas fa-utensils"></i></td>
            <td className={[styles.grayBorder, styles.blue].join(' ')}><span className={styles.help}><span className={[styles.bold, styles.underline].join(' ')}>Full Menu</span> <i class="fab fa-amazon-pay"></i></span></td>
          </tr>
          <tr>
            <td className={styles.center}>
              {
                Number(price) < 25 ?
                  <span><span className={styles.green}>$</span>$$$ </span>
                  :
                  Number(price) < 60 ?
                    <span><span className={styles.green}>$$</span>$$ </span> 
                    :
                    Number(price) < 80 ?
                      <span><span className={styles.green}>$$$</span>$ </span>
                      :
                      <span className={styles.green}>$$$$</span> 
              }
            </td>
            <td className={styles.grayBorder}>
              Price Range  <span className={styles.bold}>{details.Price_Range}</span>
            </td>
          </tr>
          <tr>
            <td className={styles.center}>
              {
                health === 'A' ?
                  <span className={[styles.green, styles.help].join(' ')}><i class="fab fa-asymmetrik"></i></span>
                  :
                  health === 'B' ?
                    <span className={[styles.blue, styles.help].join(' ')}><i class="fab fa-bitcoin"></i></span>
                    :
                    health === 'C' ?
                      <span className={[styles.blue, styles.help].join(' ')}><i class="fab fa-cuttlefish"></i></span>
                      :
                      health === 'D' ?
                        <span className={[styles.gray, styles.help].join(' ')}><i class="fab fa-dochub"></i></span>
                        :
                        health === 'E' ?
                          <span className={[styles.green, styles.f, styles.help].join(' ')}><i class="fab fa-internet-explorer"></i></span>
                          :
                          <span className={[styles.red, styles.f, styles.help].join(' ')}><i class="fas fa-fighter-jet"></i></span>
              }     
            </td>
              <td className={[styles.blue, styles.bold, styles.underline, styles.help].join(' ')}>Health Score</td>
          </tr>
        </table>
      </div>
    )
  }
}
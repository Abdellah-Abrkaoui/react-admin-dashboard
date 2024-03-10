import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import './featured.css'

function Featured() {
    return (
        <div className='featured'>
            <div className="cart">
                <span className='title'>Revenue</span>
                <div className="moneyContainer">
                    <span className='money'>$ 2,234</span>
                    <span className="moneyRate">
                        -11.64  <ArrowDownwardRounded className='iconFeatured'/>
                    </span>
                </div>
                <span className="subTitle">Compare to last Month</span>
            </div>
            <div className="cart">
                <span className='title'>Revenue</span>
                <div className="moneyContainer">
                    <span className='money'>$ 7,240</span>
                    <span className="moneyRate">
                        +18.64  <ArrowUpwardRounded className="iconFeatured positive"/>
                    </span>
                </div>
                <span className="subTitle">Compare to last Month</span>
            </div>
            <div className="cart">
                <span className='title'>Revenue</span>
                <div className="moneyContainer">
                    <span className='money'>$ 1,434</span>
                    <span className="moneyRate">
                        -1.64  <ArrowDownwardRounded className='iconFeatured' />
                    </span>
                </div>
                <span className="subTitle">Compare to last Month</span>
            </div>
        </div>
    )
}

export default Featured

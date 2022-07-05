import { memo } from 'react'
import { BannersWrapper } from './style'
import { Link } from 'react-router-dom'

function Banners({ bannerList }) {
    const renderBtnBannersPage1 = () => {
        return bannerList.map(item => {
            return (
                <Link
                    to="/eleme/all"
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                        <p>
                            <img src={item.img} />
                        </p>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </Link>
            )
        })
    }



    return (
        <BannersWrapper>
            {renderBtnBannersPage1()}
        </BannersWrapper>
    )
}

export default memo(Banners)

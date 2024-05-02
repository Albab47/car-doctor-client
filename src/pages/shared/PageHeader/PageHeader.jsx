import HeaderBg from '../../../assets/images/checkout/checkout.png';

const PageHeader = ({title}) => {
    return (
        <header className='relative flex items-center rounded-lg' style={ {
            backgroundImage: `url(${HeaderBg})`,
        } }>
            <h1 className='text-3xl text-white font-bold'>{title}</h1>
            <div className='absolute bottom-0 left-1/2'>
                <p>Home/Checkout</p>
            </div>
        </header>
    );
};

export default PageHeader;
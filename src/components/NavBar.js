import styled from 'styled-components';
import { useEffect, useState } from 'react';
import device from '../assets/data/deviceSizes';
import { TextAnimateLi, useTextAnimate } from '../assets/Animate';

const DropDownContent = ({ className }) => {
  const data = useTextAnimate([
    { name: 'WORK', isActive: true },
    { name: 'ABOUT', isActive: true },
    { name: 'CONTACT', isActive: true },
    { name: 'CV', isActive: true },
  ]);

  return (
    <ul className={className}>
      {data.content.map((item, index) => {
        return (
          <TextAnimateLi
            key={index}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          >
            {item.name}
          </TextAnimateLi>
        );
      })}
    </ul>
  );
};

const StyledDropDownContent = styled(DropDownContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: var(--clr-gainsboro);

  & > li {
    cursor: pointer;
  }
`;

/* Mobile - Tablet Components */
const DropDownMenu = ({ className, hamIsActive }) => {
  return (
    <div className={className}>
      <StyledDropDownContent />
    </div>
  );
};

const StyledDropDownMenu = styled(DropDownMenu)`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 100%;
    padding-bottom: 20px;
    top: 100%;
    z-index: -1;
    top: -100%;
    transition: top 0.3s ease-in-out;
    background-color: var(--clr-onyx);
    font-family: var(--fnt-regular);

    ${({ hamIsActive }) => {
      if (hamIsActive) {
        return `
        top: 100%;
      `;
      } else {
        return `
        top: -100%;
      `;
      }
    }}
  }
`;

const HamLayer = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100%;
  transition: width 0.2s;

  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

const LongHamLayer = styled.div`
  position: relative;
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 120%;
  transition: width 0.2s;

  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

const HamburgerBtn = ({ className, isActive }) => {
  return (
    <div className={className}>
      <HamLayer isActive={isActive}></HamLayer>
      <LongHamLayer isActive={isActive}></LongHamLayer>
      <HamLayer isActive={isActive}></HamLayer>
    </div>
  );
};

const StyledHamburgerBtn = styled(HamburgerBtn)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 20px;
  direction: rtl;
`;

const MenuBtn = styled.p`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: top 0.2s ease;

  ${({ isActive }) => {
    if (isActive) {
      return 'top: -150%';
    }
  }}
`;

const CloseBtn = styled.p`
  position: absolute;
  top: 200%;
  transition: top 0.2s ease;

  ${({ isActive }) => {
    if (isActive) {
      return `
      top: 50%;
      transform: translate(0, -50%);
    `;
    }
  }}
`;

const HamTextContainer = ({ className, isActive }) => {
  return (
    <div className={className}>
      <MenuBtn isActive={isActive}>Menu</MenuBtn>
      <CloseBtn isActive={isActive}>Close</CloseBtn>
    </div>
  );
};

const StyledHamTextContainer = styled(HamTextContainer)`
  position: relative;
  height: 20px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HamBtnContainer = ({ className, setHamIsActive }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamBtn = (val) => {
    val === true ? setIsActive(false) : setIsActive(true);
  };

  useEffect(() => {
    setHamIsActive(isActive);
  }, [isActive, setHamIsActive]);

  return (
    <div className={className} onClick={() => toggleHamBtn(isActive)}>
      <StyledHamTextContainer isActive={isActive} />
      <StyledHamburgerBtn isActive={isActive} />
    </div>
  );
};

const StyledHamBtnContainer = styled(HamBtnContainer)`
  display: none;

  @media ${device.laptop} {
    display: flex;
    gap: 20px;
    color: var(--clr-gainsboro);
    align-items: center;
    cursor: pointer;
  }
`;

/* Desktop and Larger Components */

const MenuContainer = ({ className }) => {
  const data = useTextAnimate([
    { name: 'work', isActive: true },
    { name: 'about', isActive: true },
    { name: 'contact', isActive: true },
    { name: 'cv', isActive: true },
  ]);

  return (
    <ul className={className}>
      {data.content.map((item, index) => {
        return (
          <TextAnimateLi
            key={index}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          >
            {item.name}
          </TextAnimateLi>
        );
      })}
    </ul>
  );
};

const StyledMenuContainer = styled(MenuContainer)`
  display: flex;
  gap: 60px;
  color: var(--clr-gainsboro);

  @media ${device.laptop} {
    display: none;
  }
`;

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <p>E</p>
    </div>
  );
};

const StyledLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  width: 40px;
  height: 40px;
  border: 1px solid white;

  @media ${device.mobileS} {
    width: 30px;
    height: 30px;
  }
`;

/* Nav Container */

const Nav = ({ className, setHamIsActive }) => {
  return (
    <nav className={className}>
      <StyledLogo />
      <StyledMenuContainer />
      <StyledHamBtnContainer setHamIsActive={setHamIsActive} />
    </nav>
  );
};

const StyledNav = styled(Nav)`
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--fnt-regular);
  height: 100px;
  justify-content: space-between;
  background-color: var(--clr-onyx);
  z-index: auto;
`;

const NavContainer = ({ className }) => {
  const [hamIsActive, setHamIsActive] = useState(false);

  return (
    <div className={className}>
      <StyledNav setHamIsActive={setHamIsActive} />
      <StyledDropDownMenu hamIsActive={hamIsActive} />
    </div>
  );
};

const StyledNavContainer = styled(NavContainer)`
  position: relative;
  display: block;
  background-color: red;
  width: 100%;
  z-index: 9999;
`;

export default StyledNavContainer;

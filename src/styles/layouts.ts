import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TopMargin = styled.div`
  height: 50px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
export const SmallTopMargin = styled.div`
  height: 30px;
`;

export const Tage = styled.div``;

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
  width: 92%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
`;
export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;

export const BannerImage = styled.img`
  height: 500px;
`;
export const BannerWrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 180px;
  }
`;

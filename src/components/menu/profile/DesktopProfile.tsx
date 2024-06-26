import React from 'react';

import Gye2d03 from '@assets/image/gyechunhoe_live2d_03_.png';
import chunsik from '@assets/image/chunsik_character.png';
import chzzkLogo from '@assets/image/logo_chzzk.png';
import youtubeLogo from '@assets/image/logo_youtube.png';
import naverCafeLogo from '@assets/image/logo_naver_cafe.png';

import '@styles/menu/profile/DesktopProfile.scss';

export interface DesktopProfileProps {
  animateClass: string;
}

const DesktopProfile: React.FC<DesktopProfileProps> = ({ animateClass }) => {
  return (
    <>
      <div className={`gye-image-container desktop ${animateClass}`}>
        <img src={Gye2d03} alt={'계춘회 live 2d image'}></img>
      </div>
      <div className={`gye-profile-container ${animateClass}`}>
        <div className='gye-profile'>
          <div className='gye-profile-title'>
            <h1>계춘회</h1>
          </div>
          <div className='gye-profile-description'>
            <p>
              치지직에서 다양한 컨텐츠를 하고 있는 버츄얼 스트리머 입니다. 주력
              컨텐츠로는 PPT, VR을 이용한 예능쇼, 축구 중계, 종합게임을 하고
              있습니다.
            </p>
          </div>
          <div className='gye-profile-bio'>
            <div className='profile-item profile-item-01 birth-wrapper'>
              <div className='cat-box birth-title'>
                <div className='cat-box-vertical-aligner'>생일</div>
              </div>
              <div className='profile-content birth-content'>1월 8일</div>
            </div>
            <div className='profile-item profile-item-02 height-wrapper'>
              <div className='cat-box height-title'>
                <div className='cat-box-vertical-aligner'>키</div>
              </div>
              <div className='profile-content height-content'>163.8cm</div>
            </div>
            <div className='profile-item profile-item-03 age-wrapper'>
              <div className='cat-box age-title'>
                <div className='cat-box-vertical-aligner'>나이</div>
              </div>
              <div className='profile-content age-content'>예쁜나이</div>
            </div>
            <div className='profile-item profile-item-04 fanname-wrapper'>
              <div className='cat-box fanname-title'>
                <div className='cat-box-vertical-aligner'>팬네임</div>
              </div>
              <div className='profile-content fanname-content'>
                춘식이
                <figure className='fanname-image profile-chunsik-character'>
                  <img src={chunsik} alt='춘식이'></img>
                </figure>
              </div>
            </div>
            <div className='profile-item profile-item-05 manufacturer-wrapper'>
              <div className='cat-box manufacturer-title'>
                <div className='cat-box-vertical-aligner'>제조</div>
              </div>
              <div className='profile-content manufacturer-content'>
                Sonsiru
              </div>
            </div>
            <div className='profile-item profile-item-06 assembly-wrapper'>
              <div className='cat-box assembly-title'>
                <div className='cat-box-vertical-aligner'>조립</div>
              </div>
              <div className='profile-content assembly-content'>KAXA</div>
            </div>
          </div>
          <div className='gye-social'>
            <div className='social-link-wrapper chzzk-link'>
              <a
                href='https://chzzk.naver.com/live/a9a343510e132ea3026ff3cf682820b5'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='profile-social-link'
                  src={chzzkLogo}
                  alt='치지직 로고'
                ></img>
              </a>
            </div>
            <div className='social-link-wrapper youtube-link'>
              <a
                href='https://www.youtube.com/@chunhoe_'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='profile-social-link'
                  src={youtubeLogo}
                  alt='유튜브 로고'
                ></img>
              </a>
            </div>
            <div className='social-link-wrapper cafe-link'>
              <a
                href='https://cafe.naver.com/chunhoe'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='profile-social-link'
                  src={naverCafeLogo}
                  alt='네이버 카페 로고'
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopProfile;

import type { NextPage } from 'next'
import styled from 'styled-components'
import Image from 'next/image'
import { md, palette } from '../styles/styles'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <section className="first">
        <div className="first-wrapper">
          <img src="/static/connect_bottom_logo.png" alt="bottom_logo" className="logo" />
          <img src="/static/main_mockup.png" alt="main_mockup" className="mockup" />
          <div className="content">
            <h1>스태비 커넥트</h1>
            <h2>나만의 팀을 꾸려보세요!</h2>
          </div>
        </div>
        <div className="second-wrapper">
          <div className="typography-content">
            <span className="accent">연기자</span>
            <span>모델</span>
            <span>뮤지션</span>
            <span className="accent">크리에이터</span>
            <span>각본</span>
            <span>각색</span>
            <span>연출</span>
            <span>스크립터</span>
            <span>조감독</span>
            <span>투자총괄</span>
            <span>프로듀서</span>
            <span>제작</span>
            <span className="accent">제작지원</span>
            <span>투자</span>
            <span>촬영</span>
            <span>조명그립</span>
            <span>스테디캠</span>
            <span>모션컨트롤</span>
            <span>믹싱</span>
            <span className="accent">현자동시녹음</span>
            <span>음악</span>
            <span>미술세트</span>
            <span>소품</span>
            <span className="accent">미술지원</span>
            <span>미술팀장</span>
            <span className="accent">특수분장</span>
            <span>특수효과</span>
            <span>시각효과</span>
            <span>액션배우</span>
            <span>의상</span>
          </div>
          <div className="dots">
            <div className="dot" style={{ backgroundColor: palette.basicAccent1 }}></div>
            <div className="dot" style={{ backgroundColor: palette.basicAccent2 }}></div>
            <div className="dot" style={{ backgroundColor: palette.basicAccent4 }}></div>
          </div>
        </div>
      </section>
      <section className=""></section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  .first {
    .first-wrapper {
      position: relative;
      background: url('/static/main_background.png') no-repeat top/cover;

      min-height: 100vh;

      ${md} {
        min-height: 15.875rem;
      }
      .content {
        padding-top: 19.9375rem;
        margin-left: 9.125rem;

        ${md} {
          padding-top: 2.25rem;
          margin: 0;
          text-align: center;
        }
        h1,
        h2 {
          font-family: 'Nanum Gothic';
          color: #ffffff;
        }

        h1 {
          margin-bottom: 2.625rem;
          font-weight: 800;
          font-size: 6.25rem;

          ${md} {
            font-size: 1.25rem;
            margin: 0 auto 0.5rem;
          }
        }

        h2 {
          font-size: 4.375rem;
          font-weight: 800;

          ${md} {
            font-size: 1.5rem;
          }
        }
      }

      .logo {
        width: 100%;
        position: absolute;
        bottom: 0;

        object-fit: contain;

        ${md} {
          height: inherit;
        }
      }

      .mockup {
        position: absolute;
        right: 0;

        width: 42rem;
        max-height: 111.125rem;
        margin-right: 9.125rem;
        margin-top: 6.25rem;

        object-fit: contain;

        z-index: 5;

        ${md} {
          width: 11.6875rem;
          margin: 7.3125rem 0 0;
          right: 25%;
        }
      }
    }

    .second-wrapper {
      position: relative;
      .typography-content {
        font-family: 'Noto Sans KR';
        font-weight: 500;
        font-size: 3.125rem;
        line-height: 5.625rem;

        ${md} {
          font-size: 0.75rem;
          line-height: 17.38px;
        }

        span:not(:last-child) {
          margin-right: 2.5rem;

          ${md} {
            margin-right: 8.29px;
          }
        }

        span {
          color: ${palette.gray};

          &.accent {
            color: ${palette.basicAccent2};
          }
        }
      }

      .dots {
        display: inline-flex;
        margin-left: 2.75rem;
        margin-top: 3.625rem;

        ${md} {
          margin: 0;

          position: absolute;
          bottom: -0.35rem;
          right: 0.875rem;
        }

        .dot {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;

          &:not(:last-child) {
            margin-right: 4.0625rem;

            ${md} {
              margin-right: 1.4375rem;
            }
          }

          ${md} {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      }
    }
  }
`

export default Home

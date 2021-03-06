/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`

  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
      padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Gamerquiz
        </title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Gamerquiz is ready!
            </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="Nome do usuario"
                onChange={(infosDoEvento) => { setName(infosDoEvento.target.value); }}
                placeholder="Seu nome aqui"
                value={name}
              />
              <Button type="submit" disable={name.lenght === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>
                Quizes da galera
              </h1>
            </Widget.Header>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafael-projects" />
    </QuizBackground>
  );
}

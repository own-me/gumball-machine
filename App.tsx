import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import styled from "styled-components";
import Canvas from "./Canvas";
import Ui from "./Ui";

const AppContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

function App() {
    return (
        
        <AppContainer>
            <Suspense fallback={<div>Loading...</div>}>
            <Canvas />
            <Ui />
            </Suspense>
        </AppContainer>
    );
};

const element = document.getElementById('react-container');
if (element) {
    createRoot(element).render(<App />)
}
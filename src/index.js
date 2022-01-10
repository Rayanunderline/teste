import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoanForm from './loanForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <main class="bg-slate-200">
            <LoanForm />
        </main>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

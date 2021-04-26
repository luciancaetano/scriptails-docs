import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        emoji: '✅',
        description: (
            <>
                The design of the scriptails api was build to have a quick, fluid and simple understanding.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        emoji: '🔎',
        description: (
            <>
                Scriptails allows you to really focus on building your CLIs.
            </>
        ),
    },
    {
        title: 'Ready to go',
        emoji: '⚡',
        description: (
            <>
                Develop a fully functional CLI to get started quickly.
            </>
        ),
    },
];

function Feature({ emoji, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{emoji} {title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    <h3>Simple like writing tests</h3>
                </div>
                <div className="row">
                    <pre className="language-javascript" data-src-status="loaded" tabIndex={0}><code className=" language-css">
                        {`
    command('build', (c) => {
        c.aliases(['b']);
        c.description('build my android project');
        c.option(['--debug'], null, 'build debug mode', false);

        c.onAction((ctx) => {
            const debug = ctx.getOption('debug').toBoolean();

            ctx.logWithLabel('info', "Starting build proccess");

            if(debug) {
                ctx.childProcess.shellExec('my android build debug command')
            } else {
                ctx.childProcess.shellExec('my android build command')
            }
        });
    });
                        `}
                    </code></pre>
                </div>
            </div>
        </section>
    );
}

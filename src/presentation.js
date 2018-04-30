import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import Highlight from 'react-highlight'
import CodeSlide from 'spectacle-code-slide'

import {
  Cite,
  Deck,
  List,
  Text,
  Image,
  Table,
  Slide,
  Notes,
  Quote,
  Appear,
  Heading,
  ListItem,
  TableRow,
  TableBody,
  BlockQuote,
  TableHeader,
  TableHeaderItem,
  TableItem as Ti,
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: '-apple-system, BlinkMacSystemFont', // 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends PureComponent {
  render() {
    return (
      <Deck
        transition={['fade', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>hello everyone</div>
            <br />
            <div>Originally this talk was going to be about rewriting eaze.com with next.js, deviated into a brain dump, not very organized one at that</div>

            <ul>
              <li>I'm going to start off by introducing both myself and Eaze</li>
              <li>Talk about Eaze before and after migrating to Next.js</li>
              <li>And finally some additional tooling Next.js and Now.sh enabled</li>
            </ul>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Eaze.com + Next.js ❤️
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>My name is Jack Hanford</li>
              <li>Writing JS professionally for 5 years</li>
              <li>First Engineer at Eaze</li>
              <div>
                <ul>
                  <li>Employee #5</li>
                  <li>Worked at Eaze just over 3 years</li>
                </ul>
              </div>
            </ul>
          </Notes>
          <Heading style={{ textAlign: 'left' }} size={2}>👋</Heading>
          <List>
            <ListItem>Software Engineer</ListItem>
            <ListItem>Writing JS for 5 years</ListItem>
            <ListItem>active open source contributor</ListItem>
            <ListItem>First software engineer at eaze</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>➡️</li>
              <li>Tech company that facilitates on demand marijuana deliveries</li>
              <div>
                <ul>
                  <li>When i say on-demand, i mean it</li>
                  <li>Majority of deliveries happen in under 20 minutes</li>
                  <li>CNBC segment, Pizza vs Pot</li>
                </ul>
              </div>
              <li>Eaze Operates in 30+ cities in California</li>
              <li>Eaze has 130 employees, 30 engineers</li>
              <li>Deliveries are happening every 10 seconds</li>
              <li>Eaze is a mobile web company - and that's what i want to focus on</li>
            </ul>
          </Notes>
          <Heading fit caps>What is Eaze? 🕵️‍♀️</Heading>
          <br />
          <Appear>
            <Text fit>Eaze is a platform the facilitates on demand marijuana deliveries 🌲</Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>80% of traffic coming in on mobile device
                <div>
                  <ul>
                    <li>unique oppertunity</li>
                    <li>What's often an after thought, is our primary audience</li>
                  </ul>
                </div>
              </li>
              <li>5+ large react.js applications
                <div>
                  <ul>
                    <li>eaze.com</li>
                    <li>internal, b2b</li>
                  </ul>
                </div>
              </li>
              <li>
                2 react-native applications
                <div>
                  <ul>
                    <li>Driver App</li>
                    <li>Consumer browse catalog, blog</li>
                  </ul>
                </div>
              </li>
              <li>App stores don’t allow cannabis sales
                <div>
                  <ul>
                    <li>Google and Apple have different rules</li>
                    <li>Broad rules, open to their own interpretation</li>
                  </ul>
                </div>
              </li>
            </ul>
          </Notes>
          <Heading fit>mobile web company 📱</Heading>
          <List>
            <ListItem>80% of traffic is on a mobile device</ListItem>
            <ListItem>5 large react web applications</ListItem>
            <ListItem>2 react-native applications</ListItem>
            <ListItem>App stores don't allow cannabis sales</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <div>
              <ul>
                <li>3 rewrites ➡️</li>
                <li>3 different frameworks ➡️</li>
                <li>3 years ➡️</li>
                <li>Thats kind of a testament to how fast paced javascript is moving, So which frameworks?</li>
              </ul>
            </div>
          </Notes>
          <Heading caps fit textColor='secondary'>Eaze.com frontend</Heading>
          <Appear><Heading caps fit>3 rewrites</Heading></Appear>
          <Appear><Heading caps fit textColor='secondary'>3 frameworks</Heading></Appear>
          <Appear><Heading caps fit>3 years</Heading></Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>Angular 1.x (July 2014 to August 2015)
              <div>
                <ul>
                  <li>Two way data binding was great until your application grew</li>
                  <li>Hard to have good SEO</li>
                </ul>
              </div>
            </div>
            <div>Mercury (August 2015 -> November 2016)
              <div>
                <ul>
                  <li>Framework composed of a lot of npm micro modules</li>
                  <li>bring your own virtual-dom, data management</li>
                  <li>Couldn’t scale a team with it, nobody else knew how to contribute quickly</li>
                </ul>
              </div>
            </div>
            <div>React (November 2016 -> today)
              <div>
                <ul>
                  <li>Easy to hire / scale team</li>
                  <li>good performance, great ecosystem</li>
                  <li>Standing on the shoulders of giants (facebook, 50k components)</li>
                  <li>New hires making contributions on Day 1</li>
                </ul>
              </div>
            </div>
          </Notes>
          <Heading caps fit>Which frameworks?</Heading>
          <List>
            <ListItem>Angular 1.x (July '14 → August '15)</ListItem>
            <ListItem>Mercury (August '15 → November '16)</ListItem>
            <ListItem>React (November '16 → today)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>So, this is pre next.js</div>
            <br />
            <div>But after choosing React, We were super excited to bootstrap our new project. Eager for a clean slate</div>
            <br />
            <div>But we quickly got slapped in the face by build infrastructure</div>
          </Notes>
          <Heading caps fit>Eaze meets React</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>At some point, this was very real</div>
          </Notes>
          <Image style={{maxWidth: '100%', marginTop: 20}} src={process.env.PUBLIC_URL + `/webpack-engineer.png`} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Complex build scripts
                <ul>
                  <li>We chose to start from scratch</li>
                  <li>Before create-react-app, lots of bloated off the shelf boilerplates</li>
                </ul>
              </li>
              <li>Custom CI deploy process</li>
              <li>Custom server side rendering (which I'm going to go deeper in, in a moment)</li>
              <li>Custom CSS config
                <ul>
                  <li>Some combination of extract text plugin, css-modules, postcss, style-loader</li>
                </ul>
              </li>
              <li>No HMR for css or JS</li>
              <li>On top of that, really inefficient build process
                <ul>
                  <li>Hot computers with no battery life</li>
                  <li>Made building our application on CI non trivial</li>
                </ul>
              </li>
            </ul>
          </Notes>
          <Heading fit textColor='secondary'>Bootstrapping first react application</Heading>
          <List>
            <ListItem>Complex build scripts (webpack, babel)</ListItem>
            <ListItem>Custom CI deploy process</ListItem>
            <ListItem>Custom server side rendering</ListItem>
            <ListItem>Custom CSS config (no css-in-js)</ListItem>
            <ListItem>No HMR</ListItem>
            <ListItem>Ineffecient build processes</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>realllly, inefficient .. computer idle and node is using 150% of my CPU</div>
            <br />
            <div>git reset head~5000, this is the result</div>
            <br />
            <div>Node, chomping away at 150% of my CPU</div>
          </Notes>
          <Image style={{maxWidth: '100%', marginTop: 20}} src={process.env.PUBLIC_URL + `/node.png`} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>As the team grew, so did this tribal knowledge
                <ul>
                  <li>Coworker and I were constantly pointing to each other for various parts of the application we weren’t as familiar with to unblock newer teammates</li>
                  <li>Rougher parts of our application were brittle and as a result developers were afraid to modify</li>
                </ul>
              </li>
            </ul>
          </Notes>
          <Heading caps fit textColor='secondary'>Frontend team grew 3x in 6 months (3 → 9)</Heading>

          <List>
            <ListItem>Complex build (webpack, babel) .. <span style={{color: '#03A9FC'}}>I owned</span></ListItem>
            <ListItem>Custom CI build / deploy process .. <span style={{color: '#03A9FC'}}>I owned</span></ListItem>
            <ListItem>Custom SSR .. <span style={{color: '#03A9FC'}}>Colleague owned</span></ListItem>
            <ListItem>Custom CSS config .. <span style={{color: '#03A9FC'}}>Nobody owned</span></ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Enter Next.js and Now.sh</li>
              <br />
              <li>Why did we choose Next.js?
                <ul>
                  <li>React wasn't the problem, the lack of structure was</li>
                  <li>Out of the box Next.js comes with really well defined boundaries</li>
                  <li>Now, would help reduces our devops dependencies, and let the FE team, own the FE environments</li>
                  <li>Next, would give us a faster development speed with HMR</li>
                  <li>Both would help us serve out website faster</li>
                </ul>
              </li>
            </ul>
          </Notes>

          <Heading caps textColor='secondary' style={{fontFamily: ''}}>▲</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Here is a look at our webpack system before Next.js</li>
              <li>Webpack was spread across many files</li>
              <li>Weird non-standard composition</li>
              <li>Switching to Next.js reduced webpack code by ~80% ➡️</li>
              <li>Accomplishing a lot more, with way less code ️️➡️</li>
            </ul>
          </Notes>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Heading size={2} textColor='secondary'>webpack</Heading>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <List>
                <ListItem style={{listStyle: 'none'}}>./scripts/webpack-build.js</ListItem>
                <ListItem style={{listStyle: 'none'}}>./scripts/webpack-watch.js</ListItem>
                <ListItem style={{listStyle: 'none'}}>./scripts/webpack-base-config.js</ListItem>
                <ListItem style={{listStyle: 'none'}}>./scripts/webpack-alias-config.js</ListItem>
              </List>
              <Appear>
                <List>
                  <ListItem style={{listStyle: 'none'}}>./next.config.js</ListItem>
                </List>
              </Appear>
            </div>
            <Appear>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <ListItem style={{listStyle: 'none'}}>250 LOC</ListItem>
                <ListItem style={{listStyle: 'none'}}>50 LOC</ListItem>
              </div>
            </Appear>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Before Next.js we had two environments, development.eaze.com and eaze.com
                <ul>
                  <li>Didn’t really scale past a couple frontend team members</li>
                  <li>Lots of coordination between FE engineers and product to see work outside of localhost</li>
                </ul>
              </li>
              <li>Switched from Buildkite -> CircleCI ➡️</li>
              <li>So once we started deploying to now
                <li>we got simpler code</li>
                <li>Infinite immutable environments</li>
              </li>
            </ul>
          </Notes>

          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Heading size={2} textColor='secondary'>deployments</Heading>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <List>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>./scripts/branch.sh</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>./scripts/build.sh</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>./scripts/environment.sh</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>./scripts/deploy.sh</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>./scripts/deploy-configuration.sh</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>.buildkite/pipeline.yml</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>.buildkite/pipeline.yml</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>.buildkite/hooks/pre-command</ListItem>
                <ListItem style={{listStyle: 'none', fontSize: '2rem'}}>docker-compose.yml</ListItem>
              </List>
              <Appear>
                <List>
                  <ListItem style={{listStyle: 'none'}}>./scripts/deploy.sh</ListItem>
                  <ListItem style={{listStyle: 'none'}}>./circle.yml</ListItem>
                </List>
              </Appear>
            </div>
            <Appear>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <ListItem style={{listStyle: 'none'}}>295 LOC</ListItem>
                <ListItem style={{listStyle: 'none'}}>70 LOC</ListItem>
              </div>
            </Appear>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Complex, stateful code littered across app, below was in our redux mapStateToProps</li>
              <li>Data could be coming from window object, (preloadedProps) render service, application redux state, or 404</li>
              <li>Only SSR on SEO (product, brand) pages
                <ul>
                  <li>No first class support because they weren’t part of core flow</li>
                  <li>Deploys would break them, and we wouldn’t know until users or employees would raise the issue</li>
                </ul>
              </li>
            </ul>
          </Notes>

          <Text>SSR before Next.js</Text>

          <Image width='100%' src={process.env.PUBLIC_URL + `/old-ssr.png`} />
        </Slide>


        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <div>12 LOC achieving the same thing</div>
            <br />
            <div>So right now we've talk about how Next.js and Now have improved webpack, deployments and server side rendering</div>
          </Notes>

          <Text>SSR after Next.js</Text>
          <Image width='100%' src={process.env.PUBLIC_URL + `/new-ssr.png`} />
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <div>
              Problem:
              <ul>
                <li>People would be on our static website for weeks</li>
              </ul>
              Solution:
              <ul>
                <li>Now that we have a custom node server with Next.js</li>
                <li>Create /status endpoint that returns commit hash of whatever was deployed</li>
                <li>After we deploy our new node server will return a different commit hash</li>
                <li>and because the FE is polling this endpoint we can then prompt users to update</li>
                <li>all of our users can be on our latest code in a matter of minutes</li>
              </ul>
            </div>
          </Notes>

          <Heading size={6} textColor='secondary'>Detect website deploys</Heading>
          <br />
          <Image width='100%' src={process.env.PUBLIC_URL + `/auto-update.png`} />
        </Slide>

        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>One day we noticed all these options requests happening in the network tab.</li>
              <li>Our API lived on subdomain and every request with non standard headers had an OPTIONS request</li>
              <li>these OPTIONS request taking 100+ MS</li>
            </ul>
          </Notes>
          <Image width='100%' src={process.env.PUBLIC_URL + `/pre-proxy.png`} />
        </Slide>


        <Slide transition={['fade']}>
          <Notes>
            <ul>
              <li>we discovered we could fix this by proxying our API calls through the frontend server</li>
              <li>On the client we removed hardcoded API URL, in favor of relative `/api`</li>
              <li>all API requests were now being passed through our proxy which meant
                <ul>
                  <li>no dns lookup to API</li>
                  <li>no new TCP or SSL handhsake to API</li>
                  <li>no pre-flights</li>
                  <li>reduced every request with special headers by 150ms</li>
                </ul>
              </li>
            </ul>
          </Notes>

          <Heading size={6} textColor='secondary'>Proxy API calls through frontend server</Heading>
          <br />
          <Image width='100%' src={process.env.PUBLIC_URL + `/post-proxy.png`} />
        </Slide>

        <Slide transition={['fade']} >
          <Notes>
            <ul>
              <li>This is how eaze measures client side performance</li>
              <li>Turns out everything you need is already on the window object</li>
              <li>At eaze, we have a react HOC that does a track call with this data and sends it off to segment</li>
            </ul>
          </Notes>

          <Heading size={6} textColor='secondary'>Client side performance</Heading>
          <br />
          <Image width='100%' src={process.env.PUBLIC_URL + `/perf.png`} />
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>As you can see performance was noticeably better</li>
              <li>Also perceived performance</li>
              <li>Because the server is rendering most of our pages this means no more solid white screen while the browser is downloading, parsing and bootstrapping our JS</li>
              <li>Now, I'd like to talk about some of the tooling next has enabled</li>
            </ul>
          </Notes>

          <Heading size={6} textColor='secondary'>Performance</Heading>
          <Heading textAlign='left' size={6} textColor='secondary'>Before Next.js</Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem align='left'>Time to interactive (TTI)</TableItem>
                <TableItem align='right'>517ms</TableItem>
              </TableRow>
              <TableRow>
                <TableItem align='left'>Load complete</TableItem>
                <TableItem align='right'>1821ms</TableItem>
              </TableRow>
            </TableBody>
          </Table>

          <br />

          <div>
            <Heading textAlign='left' size={6} textColor='secondary'>After Next.js</Heading>

            <Table>
              <TableBody>
                <TableRow>
                  <TableItem align='left'>Time to interactive (TTI)</TableItem>
                  <TableItem align='right'>315ms</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem align='left'>Load complete</TableItem>
                  <TableItem align='right'>1174ms</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Slide>

        {/* <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Next I want to talk about some of the tooling that Next and Now enabled</li>
              <li>it's easy to be creative with a standardized build pipeline</li>
            </ul>
          </Notes>

          <Heading caps textColor='secondary'>Tooling 🔨</Heading>
        </Slide> */}

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Triggered via PR on CircleCI</li>
              <li>Builds application on feature branch and on master</li>
              <li>Compares webpack stats output</li>
              <li>Generates HTML page of output</li>
              <li>Now.sh static deployment</li>
              <li>automatically comments on PR</li>
              <a href='https://bundle-cop-dbgxvwjdtx.now.sh' target='_blank'>live example</a>
            </ul>
          </Notes>

          <Heading textColor='secondary'>bundle cop 🚓</Heading>
          <br />
          <Text>Bundle size comparison between a feature branch and master branch</Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Triggered via PR on CircleCI</li>
              <li>Traverse core flow</li>
              <li>Screenshot each step</li>
              <li>loads up mobile browser and repeats</li>
              <li>Now.sh static deployment</li>
              <li>automatically comments on commit</li>
              <a href='https://e2e-khmjeapqrp.now.sh/' target='_blank'>live example</a>
            </ul>
          </Notes>

          <Heading textColor='secondary'>E2Eaze</Heading>
          <br />
          <Text>integration tests for eaze.com traversing core path via puppeteer</Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Super valuable because an eng can open E2Eaze and see that the core flow works</li>
              <li>That FE eng can then double check that theyre not accidentally ballooning the bundle sizes</li>
              <li>Finally they could send the build over to QA so they could do some manual testing</li>
            </ul>
          </Notes>

          <Image width='100%' src={process.env.PUBLIC_URL + `/commit.png`} />
        </Slide>

        {/* <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>Worbox is JavaScript Libraries for adding offline support to progressive web apps via Service Workers</li>
              <li>workbox is pretty special because it allows caching of not only HTML, CSS and JS assets, but also API calls</li>
              <li>precaching and runtime caching</li>
              <li>networkFirst, cacheFirst</li>
              <li>at eaze we automatically cache all api requests that 200</li>
            </ul>
          </Notes>

          <Heading textColor='secondary'>next-offline</Heading>
          <Text>offline Next.js application powered by Google's Workbox</Text>
        </Slide> */}

        <Slide transition={['fade']} bgColor='primary'>
          <Notes>
            <ul>
              <li>So I've talk about how Next and Now have helped Eaze simplify
                <ul>
                  <li>webpack</li>
                  <li>deployments</li>
                  <li>server side rendering</li>
                  <li>increased application performance</li>
                  <li>helped with e2e tests</li>
                  <li>bundle size comparisons</li>
                </ul>
              </li>
              <br />
              <li>Thank you so much for letting me talk about the benefits we've seen with next.js</li>
              <li>Interested in bundle-cop? they can be found on my github</li>
            </ul>
          </Notes>

          <List>
            <Item><i className='ion-social-github' /> - hanford</Item>
            <Item><i className='ion-social-twitter' /> - @jackhanford</Item>
            <Item><i className='ion-android-desktop' /> - https://jackhanford.com</Item>
          </List>
        </Slide>
      </Deck>
    )
  }
}

const TableItem = styled(Ti)`
  text-align: ${({ align }) => align};
`

const Item = styled(ListItem)`
  list-style: none;
`

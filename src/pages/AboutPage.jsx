import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is just a reusable React App to leave feedback</p>

            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
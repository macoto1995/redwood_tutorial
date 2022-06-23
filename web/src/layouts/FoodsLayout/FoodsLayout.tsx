import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FoodLayoutProps = {
  children: React.ReactNode
}

const FoodsLayout = ({ children }: FoodLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.foods()}
            className="rw-link"
          >
            Foods
          </Link>
        </h1>
        <Link
          to={routes.newFood()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Food
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FoodsLayout

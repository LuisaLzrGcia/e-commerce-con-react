import useAuth from "../../hooks/useAuth"
function User() {
  const { nameUser, emailUser, phoneUser, addressUser } = useAuth()
  return (
    <div className="top-20 px-28 pt-20 w-full absolute">
      <div className="p-6 rounded-xl shadow-2xl bg-slate-50">
        <div className="px-4 sm:px-0 text-center">
          <h3 className="text-5xl font-semibold leading-7 text-gray-900">Información de usuario</h3>
        </div>
        <div className="mt-6 text-lg border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Nombre completo</dt>
              <dd className="capitalize mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{nameUser}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Correo Electrónico</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{emailUser}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Teléfono</dt>
              <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{phoneUser}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Dirección</dt>
              <dd className="capitalize mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {addressUser}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default User

function AppRoutes(props) {

return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />

{/* nested routes, matches on /dash/messages etc */}
<Route path="/anime" element={<DashboardPage {...props} />}>

</Route>

<Route path='/about' element={<AboutPage {...props} />} />

{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />
</Routes>
)
}

export default AppRoutes;
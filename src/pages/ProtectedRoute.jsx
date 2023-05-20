import { useAuthContext } from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 admin 권한이 있는지 확인
  // requireAdmin true: 로그인도 되어 있어야 하고 admin 권한도 갖고 있어야 함
  // 조건에 맞지 않으면 home으로 이동
  // 조건에 맞는 경우에만 전달된 children 보여주기
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

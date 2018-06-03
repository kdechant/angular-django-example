from rest_framework import permissions

SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')


class ReadOnly(permissions.BasePermission):
    """
    The endpoint is read-only request.
    """

    def has_permission(self, request, view):
        return (
            request.method in SAFE_METHODS
        )

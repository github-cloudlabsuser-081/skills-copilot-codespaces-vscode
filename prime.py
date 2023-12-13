def prime(n):
    """Returns True if n is prime."""
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
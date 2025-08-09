import pygame
import random
import sys

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Arrow Shooting Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
BROWN = (139, 69, 19)

# Game variables
clock = pygame.time.Clock()
FPS = 60
score = 0
font = pygame.font.SysFont('Arial', 30)

# Player (bow)
bow_pos = [100, HEIGHT // 2]
bow_width = 40
bow_height = 80
bow_angle = 0

# Arrow
arrow_length = 60
arrow_thickness = 5
arrows = []  # List to store active arrows

# Targets
targets = []
target_radius = 30
target_spawn_timer = 0
target_spawn_interval = 60  # frames

def spawn_target():
    y = random.randint(100, HEIGHT - 100)
    speed = random.uniform(1, 3)
    targets.append({"x": WIDTH, "y": y, "speed": speed})

def draw_bow():
    # Draw bow body
    pygame.draw.rect(screen, BROWN, (bow_pos[0] - bow_width//2, bow_pos[1] - bow_height//2, bow_width, bow_height))
    
    # Draw bow string
    string_start = (bow_pos[0], bow_pos[1] - bow_height//2)
    string_end = (bow_pos[0], bow_pos[1] + bow_height//2)
    pygame.draw.line(screen, BLACK, string_start, string_end, 3)

def draw_arrow(x, y, angle):
    # Calculate arrow endpoints
    end_x = x + arrow_length * pygame.math.Vector2(1, 0).rotate(-angle).x
    end_y = y + arrow_length * pygame.math.Vector2(1, 0).rotate(-angle).y
    
    # Draw arrow
    pygame.draw.line(screen, BLACK, (x, y), (end_x, end_y), arrow_thickness)
    
    # Draw arrowhead
    pygame.draw.polygon(screen, BLACK, [
        (end_x, end_y),
        (end_x - 10 * pygame.math.Vector2(1, 0).rotate(-angle + 20).x, 
         end_y - 10 * pygame.math.Vector2(1, 0).rotate(-angle + 20).y),
        (end_x - 10 * pygame.math.Vector2(1, 0).rotate(-angle - 20).x, 
         end_y - 10 * pygame.math.Vector2(1, 0).rotate(-angle - 20).y)
    ])

def draw_target(target):
    pygame.draw.circle(screen, RED, (int(target["x"]), int(target["y"])), target_radius)
    pygame.draw.circle(screen, WHITE, (int(target["x"]), int(target["y"])), target_radius - 10)
    pygame.draw.circle(screen, RED, (int(target["x"]), int(target["y"])), target_radius - 20)

def check_collisions():
    global score
    for arrow in arrows[:]:
        for target in targets[:]:
            # Simple distance check
            distance = ((arrow["x"] - target["x"])**2 + (arrow["y"] - target["y"])**2)**0.5
            if distance < target_radius:
                score += 10
                arrows.remove(arrow)
                targets.remove(target)
                break

# Main game loop
running = True
while running:
    screen.fill(WHITE)
    
    # Event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1:  # Left mouse button
                # Shoot arrow
                mouse_x, mouse_y = pygame.mouse.get_pos()
                angle = pygame.math.Vector2(mouse_x - bow_pos[0], mouse_y - bow_pos[1]).angle_to((1, 0))
                arrows.append({"x": bow_pos[0], "y": bow_pos[1], "angle": angle, "speed": 10})
    
    # Update bow angle based on mouse position
    mouse_x, mouse_y = pygame.mouse.get_pos()
    bow_angle = pygame.math.Vector2(mouse_x - bow_pos[0], mouse_y - bow_pos[1]).angle_to((1, 0))
    
    # Spawn targets
    target_spawn_timer += 1
    if target_spawn_timer >= target_spawn_interval:
        spawn_target()
        target_spawn_timer = 0
    
    # Update arrows
    for arrow in arrows[:]:
        arrow["x"] += arrow["speed"] * pygame.math.Vector2(1, 0).rotate(-arrow["angle"]).x
        arrow["y"] += arrow["speed"] * pygame.math.Vector2(1, 0).rotate(-arrow["angle"]).y
        
        # Remove arrows that go off screen
        if arrow["x"] < 0 or arrow["x"] > WIDTH or arrow["y"] < 0 or arrow["y"] > HEIGHT:
            arrows.remove(arrow)
    
    # Update targets
    for target in targets[:]:
        target["x"] -= target["speed"]
        if target["x"] < -target_radius:
            targets.remove(target)
    
    # Check collisions
    check_collisions()
    
    # Draw everything
    draw_bow()
    
    for arrow in arrows:
        draw_arrow(arrow["x"], arrow["y"], arrow["angle"])
    
    for target in targets:
        draw_target(target)
    
    # Draw score
    score_text = font.render(f"Score: {score}", True, BLACK)
    screen.blit(score_text, (10, 10))
    
    pygame.display.flip()
    clock.tick(FPS)

pygame.quit()
sys.exit()

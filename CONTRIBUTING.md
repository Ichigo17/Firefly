# Contributing to Firefly Energy Platform

Thank you for your interest in contributing to the Firefly Energy Distributor Intelligence Platform!

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone <your-fork-url>
   cd firefly-platform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Use strict TypeScript types
- Define types in `shared/schema.ts` for data models
- Avoid `any` type unless absolutely necessary

### React Components
- Use functional components with hooks
- Follow the existing component patterns
- Keep components focused and single-purpose
- Add proper TypeScript props interfaces

### Styling
- Use Tailwind CSS utility classes
- Follow the design system in `design_guidelines.md`
- Use shadcn/ui components when available
- Maintain dark mode compatibility

### Testing
- Add `data-testid` attributes to interactive elements
- Format: `data-testid="button-action-name"` or `data-testid="input-field-name"`
- Test all new features before submitting

## Project Structure

```
client/src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   └── examples/       # Component examples
├── pages/              # Page components (routes)
├── lib/                # Utilities and configurations
└── App.tsx             # Main app component

server/
├── routes.ts           # API route handlers
├── storage.ts          # Storage interface
└── index.ts            # Server entry point

shared/
└── schema.ts           # Shared data models and types
```

## Making Changes

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Follow the code standards above
- Keep commits atomic and well-described
- Write clear commit messages

### 3. Test Your Changes
- Test in both light and dark mode
- Verify responsive design on different screen sizes
- Check all interactive features work
- Ensure no console errors

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit Message Format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 5. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Component Guidelines

### Creating New Components

1. **Location**: Place in `client/src/components/`
2. **Naming**: Use PascalCase (e.g., `ProductFinder.tsx`)
3. **Structure**:
   ```tsx
   import { ... } from "@/components/ui/...";

   interface MyComponentProps {
     // Define props
   }

   export function MyComponent({ ...props }: MyComponentProps) {
     // Component logic
     return (
       <div data-testid="my-component">
         {/* JSX */}
       </div>
     );
   }
   ```

4. **Example**: Create corresponding example in `components/examples/`

### Using Existing Components

- Prefer shadcn/ui components from `@/components/ui/`
- Use `<Card>`, `<Button>`, `<Badge>` instead of custom divs
- Follow existing patterns for consistency

## API Development

### Adding New Routes

1. **Define Schema** in `shared/schema.ts`:
   ```typescript
   export const myModel = pgTable("my_model", {
     id: serial("id").primaryKey(),
     name: text("name").notNull(),
   });

   export const insertMyModelSchema = createInsertSchema(myModel);
   export type InsertMyModel = z.infer<typeof insertMyModelSchema>;
   export type MyModel = typeof myModel.$inferSelect;
   ```

2. **Update Storage Interface** in `server/storage.ts`:
   ```typescript
   interface IStorage {
     // ... existing methods
     getMyModels(): MyModel[];
     createMyModel(data: InsertMyModel): MyModel;
   }
   ```

3. **Implement in MemStorage** in `server/storage.ts`

4. **Add Route** in `server/routes.ts`:
   ```typescript
   app.get("/api/my-models", async (req, res) => {
     const data = storage.getMyModels();
     res.json(data);
   });
   ```

## Design Guidelines

- **Colors**: Follow `design_guidelines.md` for color usage
- **Spacing**: Use consistent spacing (small, medium, large)
- **Typography**: Inter for UI, JetBrains Mono for numbers
- **Dark Mode**: Always include dark mode variants
- **Responsive**: Test on mobile, tablet, desktop

## Questions or Issues?

- Check existing issues on GitHub
- Ask in team discussions
- Contact the development team

## Code Review Process

1. All PRs require at least one review
2. Address review feedback promptly
3. Keep PRs focused and reasonably sized
4. Ensure CI checks pass

Thank you for contributing to Firefly Energy Platform! 🚀
